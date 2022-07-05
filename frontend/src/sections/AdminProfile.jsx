import {
    LocationMarkerIcon,
    MailIcon,
    PhoneIncomingIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { StudzoneState } from "../Context";
import { motion } from "framer-motion";

const Chart = React.lazy(() => import("../components/Chart"));
const NoReccords = React.lazy(() => import("../components/NoReccords"));

const AdminProfile = () => {
    const [staff, setStaff] = useState({});
    const [loadProfile, setLoadProfile] = useState(false);
    const { user } = StudzoneState();

    const fetchProfile = async () => {
        setLoadProfile(true);
        const { data } = await axios.post(
            "http://localhost:5000/staff/profile",
            { id: user.id }
        );
        setStaff(data);
        setLoadProfile(false);
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <>
            {staff !== null && !loadProfile ? (
                <motion.div
                    className="w-full mt-0.5 py-10 h-full"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="rounded-3xl w-full h-full bg-slate-100 flex flex-col text-center md:text-left">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-[0.3] flex items-center justify-center p-8 pb-0 md:p-16">
                                <img
                                    className="h-40 w-40 rounded-full ring-slate-600 ring-2 p-1"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="flex-[0.7] px-4 py-8">
                                <div className="text-3xl text-slate-600 font-bold tracking-wider pb-1">
                                    {staff?.name}
                                </div>
                                <div className="font-semibold py-1 text-slate-600 tracking-wider uppercase">
                                    {staff?.d_id}
                                </div>
                                <div className=" py-1 text-slate-500 captialize font-semibold flex flex-row tracking-wider justify-center md:justify-start">
                                    {staff?.designation}
                                    <div className="px-1 normal-case">
                                        {" - Since, "}
                                        {new Date(
                                            staff?.exp_years
                                        ).toLocaleDateString("en-us")}
                                    </div>
                                </div>
                                <div className="py-1 font-bold text-slate-500 capitalize flex flex-row gap-5 justify-center md:justify-start">
                                    <div>{staff?.gender}</div>
                                    <div className="">
                                        {"DOB : " +
                                            new Date(
                                                staff?.dob
                                            ).toLocaleDateString("en-us")}
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col gap-2 md:gap-5 items-center md:items-start">
                                    <div
                                        className="py-1 tracking-wider underline text-[#FF844B] flex flex-row gap-2 items-center font-medium"
                                        href="#"
                                    >
                                        <MailIcon className="h-6 w-6 text-slate-500" />
                                        {staff?.mail_id}
                                    </div>
                                    <div className="py-1 font-bold text-[#FF844B] flex flex-row gap-2">
                                        <PhoneIncomingIcon className="h-6 w-6 text-slate-500  font-medium" />
                                        {staff?.phone_no}
                                    </div>
                                </div>
                                <div className="py-1 font-bold text-slate-500 flex gap-2 flex-row">
                                    <LocationMarkerIcon className="h-12 w-12 md:h-8 md:w-8 text-slate-500 font-medium" />
                                    33/148, Sunshine Apartments, AGS Colony, 2nd
                                    Main Road, Velachery, {staff?.address}
                                </div>
                            </div>
                        </div>
                        <div className="px-5 h-full rounded-xl flex items-center justify-center w-full">
                            <Chart />
                        </div>
                    </div>
                </motion.div>
            ) : (
                <div className="py-10">
                    <NoReccords heading="profile" />
                </div>
            )}
        </>
    );
};

export default AdminProfile;
