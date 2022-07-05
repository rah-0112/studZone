import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import NoReccords from "../components/NoReccords";
import { StudzoneState } from "../Context";
import { API } from "../api";

const Arrear = () => {
    const [students, setStudents] = useState([]);
    const { user } = StudzoneState();

    const fetchArrearStudents = async () => {
        const { data } = await axios.post(API + "/staff/arrear", {
            id: user.id,
        });
        setStudents(data);
    };

    useEffect(() => {
        fetchArrearStudents();
    });

    return (
        <div className="py-10">
            {students.length !== 0 ? (
                <div className="py-10 flex flex-wrap flex-row w-full overflow-y-auto h-[80.6vh] justify-center">
                    {students.map((item, idx) => (
                        <div className="flex flex-col bg-white sm:flex-row p-5 m-5 gap-3 items-center rounded-xl bg-opacity-90 backdrop-filter backdrop-blur-lg h-fit sm:h-48 ">
                            {item.cleared ? (
                                <div className="flex flex-col items-center">
                                    <CheckCircleIcon className="h-20 text-green-600 text-opacity-70" />
                                    <div class="px-5 py-5 text-sm">
                                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span
                                                aria-hidden
                                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                            ></span>
                                            <span class="relative">
                                                Cleared
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <XCircleIcon className="h-20 text-red-600 text-opacity-85" />
                                    <div class="px-5 py-5 text-sm">
                                        <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span
                                                aria-hidden
                                                class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                            ></span>
                                            <span class="relative">Due</span>
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col text-center sm:text-left gap-2">
                                <div className="font-bold w-48 text-lg tracking-wider text-slate-700">
                                    {"Roll_no : "}
                                    {item.id}
                                </div>
                                <div className="font-bold w-48  text-lg tracking-wider text-slate-700">
                                    {item.paper_name}
                                </div>
                                <div className="font-bold w-48 text-md tracking-wider text-slate-700 capitalize">
                                    {"Name : "}
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <NoReccords heading="Arrear" />
            )}
        </div>
    );
};

export default Arrear;
