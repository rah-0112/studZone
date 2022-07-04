import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Chart from "./Chart";
import LoginNav from "./LoginNav";
import { useEffect } from "react";
import { StudzoneState } from "../Context";
import axios from "axios";
import {
    LocationMarkerIcon,
    MailIcon,
    PhoneIncomingIcon,
} from "@heroicons/react/solid";
import NoReccords from "./NoReccords";

const Profile = () => {
    const [student, setStudent] = useState({});
    const { user } = StudzoneState();

    const fetchProfile = async () => {
        const { data } = await axios.post(
            "http://localhost:5000/student/profile",
            { rollno: user.id }
        );
        setStudent(data.data[0]);
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <motion.div
            className="bg-black h-full bg-gradient-to-t from-slate-500 to-[#fafafa] py-2.5"
            exit={{ opacity: 0 }}
        >
            <LoginNav profile={"hello"} />
            <>
                {student !== null ? (
                    <div className="w-full h-full lg:px-32 px-5 sm:px-20 md:px-16 py-6">
                        <div className="rounded-3xl w-full h-full bg-slate-100 flex flex-col text-center md:text-left">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-[0.3] flex items-center justify-center p-8 md:p-16 md:pb-18">
                                    <img
                                        className="h-40 w-40 rounded-full ring-slate-600 ring-2 p-1"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-[0.7] px-4 py-8">
                                    <div className="text-3xl text-slate-600 font-bold tracking-wider pb-1">
                                        {student.name}
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
                                            className="py-1 tracking-wider underline text-[#FF844B] flex flex-row gap-2 items-center font-medium"
                                            href="#"
                                        >
                                            <MailIcon className="h-6 w-6 text-slate-500" />
                                            {student?.mail_id}
                                        </div>
                                        <div className="py-1 font-bold text-[#FF844B] flex flex-row gap-2">
                                            <PhoneIncomingIcon className="h-6 w-6 text-slate-500  font-medium" />
                                            {student?.phone_no}
                                        </div>
                                    </div>
                                    <div className="py-1 font-bold text-slate-500 flex gap-2 flex-row">
                                        <LocationMarkerIcon className="h-12 w-12 md:h-8 md:w-8 text-slate-500 font-medium" />
                                        33/148, Sunshine Apartments, AGS Colony,
                                        2nd Main Road, Velachery,{" "}
                                        {student?.address}
                                    </div>
                                </div>
                            </div>
                            <div className="px-5 h-full rounded-xl flex items-center justify-center w-full py-1">
                                <Chart />
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
