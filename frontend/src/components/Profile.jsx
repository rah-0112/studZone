import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/ProfileArrow.svg";
import LoginNav from "./LoginNav";
import { useEffect } from "react";
import { StudzoneState } from "../Context";
import axios from "axios";
import {
    LocationMarkerIcon,
    MailIcon,
    PhoneIncomingIcon,
    UserIcon,
} from "@heroicons/react/solid";
import { API } from "../api";
const NoReccords = React.lazy(() => import("../components/NoReccords"));

const Profile = () => {
    const [student, setStudent] = useState(null);
    const [parents, setParents] = useState({});
    const [loadParents, setLoadParents] = useState(false);
    const [loadProfile, setLoadProfile] = useState(false);
    const { user } = StudzoneState();

    const fetchProfile = async () => {
        setLoadProfile(true);
        const { data } = await axios.post(API + "/student/profile", {
            rollno: user.id,
        });
        setStudent(data.data[0]);
        setLoadProfile(false);
    };

    const fetchParents = async () => {
        setLoadParents(true);
        const { data } = await axios.post(API + "/student/parentDetails", {
            rollno: user.id,
        });
        setParents(data);
        setLoadParents(false);
    };

    useEffect(() => {
        fetchProfile();
        fetchParents();
    }, []);

    return (
        <motion.div
            className="bg-black md:h-full lg:h-[100vh] h-full bg-gradient-to-t from-slate-500 to-[#fafafa] py-2.5"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <LoginNav />
            <>
                {student !== null && !loadProfile && !loadParents ? (
                    <div className="w-full lg:px-32 px-5 sm:px-20 md:px-16 py-6">
                        <div className="rounded-3xl w-full h-full bg-slate-100 flex flex-col text-center md:text-left">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-[0.3] flex items-center justify-center p-8 md:p-16 md:pb-18">
                                    <img
                                        className="h-40 w-40 rounded-full ring-slate-600 ring-2 p-1"
                                        src="https://xsgames.co/randomusers/avatar.php?g=male"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-[0.7] px-4 py-8">
                                    <div className="text-3xl text-slate-600 font-bold tracking-wider pb-1">
                                        {student?.name}
                                    </div>
                                    <div className="font-semibold py-1 text-slate-600 tracking-wider uppercase">
                                        {student?.d_id}
                                    </div>
                                    <div className=" py-1 text-slate-500 captialize font-semibold flex flex-row tracking-wider justify-center md:justify-start">
                                        {"Batch :  "}
                                        {student?.batch}
                                    </div>
                                    <div className="py-1 font-bold text-slate-500 capitalize flex flex-row gap-5 justify-center md:justify-start">
                                        <div>{student?.gender}</div>
                                        <div className="">
                                            {"DOB : " +
                                                new Date(
                                                    student?.dob
                                                ).toLocaleDateString("en-us")}
                                        </div>
                                    </div>
                                    <div className="flex md:flex-row flex-col gap-2 md:gap-5 items-center md:items-start">
                                        <div
                                            className="py-1 tracking-wider underline text-[#FF844B] flex flex-row gap-2 items-center font-medium cursor-pointer"
                                            href="#"
                                        >
                                            <MailIcon className="h-6 w-6 text-slate-500" />
                                            {student?.mail_id}
                                        </div>
                                        <div className="py-1 font-bold text-[#FF844B] flex flex-row gap-2 cursor-pointer">
                                            <PhoneIncomingIcon className="h-6 w-6 text-slate-500  font-medium" />
                                            {student?.phone_no}
                                        </div>
                                    </div>
                                    <div className="py-1 font-bold text-slate-500 flex gap-2 flex-row md:w-3/4 justify-center items-center w-full">
                                        <LocationMarkerIcon className="h-12 w-12 md:h-8 md:w-8 text-slate-500 font-medium" />
                                        33/148, Ventizil Apartments, Ramb
                                        Colony, 2nd Main Phase, Tamilnadu ,{" "}
                                        {student?.address}
                                    </div>
                                    <div className="pt-3 font-bold text-slate-500 flex gap-2 flex-row md:w-3/4 w-full justify-evenly">
                                        <Link to="/student">
                                            <div className="w-full flex-row items-center justify-center">
                                                <button className=" w-full bg-[#FF844B] font-bold text-white py-2 px-5 rounded-full flex flex-row items-center justify-center gap-2">
                                                    <div>Details</div>
                                                    <div>
                                                        <Logo className="w-5 h-5" />
                                                    </div>
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" h-full rounded-xl flex  w-full lg:px-32 px-5 sm:px-20 md:px-16 py-6 flex-col justify-start">
                                <div className="text-2xl text-slate-600 font-bold tracking-wider pb-5 flex">
                                    Parent details
                                </div>
                                <div className="flex flex-col items-start justify-start py-3 gap-3">
                                    {parents.length > 0 ? (
                                        parents.map((parent, idx) => (
                                            <div className="py-3 font-bold text-slate-500 flex gap-2 flex-col md:flex-row w-full justify-center items-center capitalize text-center md:text-left bg-slate-200 rounded-lg">
                                                <UserIcon className="w-full h-8 text-slate-500 font-medium" />
                                                <div className="w-full">
                                                    {parent?.name}
                                                </div>
                                                <div className="w-3/4">
                                                    {parent?.relationship}
                                                </div>
                                                <div className="w-full lowercase flex justify-center md:justify-start">
                                                    <div
                                                        className="tracking-wider underline text-[#FF844B] flex flex-row items-center font-medium justify-start gap-1 cursor-pointer"
                                                        href="#"
                                                    >
                                                        <MailIcon className="h-6 w-6 text-slate-500" />
                                                        <div className="">
                                                            {parent?.email_id}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <div className="py-1 font-bold text-[#FF844B] flex flex-row gap-2 items-center justify-center cursor-pointer">
                                                        <PhoneIncomingIcon className="h-6 w-6 text-slate-500  font-medium" />
                                                        {parent?.mobiles}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex w-full align-center justify-center">
                                            <div className="text-xl text-slate-600 font-bold tracking-wider pb-5 flex">
                                                No parent
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="py-10">
                        <NoReccords heading="profile" />
                    </div>
                )}
            </>
        </motion.div>
    );
};

export default Profile;
