import {
    LocationMarkerIcon,
    MailIcon,
    PhoneIncomingIcon,
} from "@heroicons/react/solid";
import React from "react";
import Chart from "../components/Chart";

const staff = {
    name: "Stuart Milton",
    dob: "23/07/1975",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "stuart@gmail.com",
    phoneNo: "+91-1234567890",
    gender: "male",
    address:
        "33/148, Sunshine Apartments, AGS Colony, 2nd Main Road, Velachery, Chennai - 600042",
    department: "Information Technology",
    joinDate: "18/06/2000",
    designation: "Assistant Professor",
    expYears: "6 years 3 months",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed expedita quam quas sequi quidem quae eius, aperiam placeat id quod commodi ipsum culpa nostrum? Quasi cum beatae est harum!",
};

const AdminProfile = () => {
    return (
        <div className="w-full mt-0.5 py-10 h-full">
            <div className="rounded-3xl w-full h-full bg-slate-100 flex flex-col text-center md:text-left">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-[0.3] flex items-center justify-center p-8 pb-0 md:p-16">
                        <img
                            className="h-40 w-40 rounded-full ring-slate-600 ring-2 p-1"
                            src={staff.image}
                            alt=""
                        />
                    </div>
                    <div className="flex-[0.7] px-4 py-8">
                        <div className="text-3xl text-slate-600 font-bold tracking-wider pb-1">
                            {staff.name}
                        </div>
                        <div className="font-semibold py-1 text-slate-600 tracking-wider uppercase">
                            {staff.department}
                        </div>
                        <div className=" py-1 text-slate-500 captialize font-semibold flex flex-row tracking-wider justify-center md:justify-start">
                            {staff.designation}
                            <div className="px-1 normal-case">
                                {" - Since, "}
                                {staff.expYears}
                            </div>
                        </div>
                        <div className="py-1 font-bold text-slate-500 capitalize flex flex-row gap-5 justify-center md:justify-start">
                            <div>{staff.gender}</div>
                            <div className="">{"DOB : " + staff.dob}</div>
                        </div>
                        <div className="flex md:flex-row flex-col gap-2 md:gap-5 items-center md:items-start">
                            <div
                                className="py-1 tracking-wider underline text-[#FF844B] flex flex-row gap-2 items-center font-medium"
                                href="#"
                            >
                                <MailIcon className="h-6 w-6 text-slate-500" />
                                {staff.email}
                            </div>
                            <div className="py-1 font-bold text-[#FF844B] flex flex-row gap-2">
                                <PhoneIncomingIcon className="h-6 w-6 text-slate-500  font-medium" />
                                {staff.phoneNo}
                            </div>
                        </div>
                        <div className="py-1 font-bold text-slate-500 flex gap-2 flex-row">
                            <LocationMarkerIcon className="h-12 w-12 md:h-8 md:w-8 text-slate-500 font-medium" />
                            {staff.address}
                        </div>
                    </div>
                </div>
                <div className="px-5 h-full rounded-xl flex items-center justify-center w-full">
                    <Chart />
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
