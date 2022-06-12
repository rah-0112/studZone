import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import React from "react";
import NoReccords from "../components/NoReccords";

const data = [
    {
        name: "Advanced Data Structures",
        student: "Rahul Gunaseelan",
        rollNo: "20I337",
        cleared: true,
    },
    {
        name: "Statistics, Probabilities and Stochastic Process",
        student: "Rahul Gunaseelan",
        rollNo: "20I337",
        cleared: false,
    },
    {
        name: "Advanced Data Structures",
        student: "Rahul Gunaseelan",
        rollNo: "20I337",
        cleared: false,
    },
    {
        name: "Statistics, Probabilities and Stochastic Process",
        student: "Rahul Gunaseelan",
        rollNo: "20I337",
        cleared: true,
    },
    {
        name: "Advanced Data Structures",
        student: "Rahul Gunaseelan",
        rollNo: "20I337",
        cleared: true,
    },
    {
        name: "Statistics, Probabilities and Stochastic Process",
        student: "Rahul Gunaseelan",
        rollNo: "20I337",
        cleared: false,
    },
    {
        name: "Advanced Data Structures",
        student: "Rahul Gunaseelan",
        rollNo: "20I337",
        cleared: false,
    },
    {
        name: "Statistics, Probabilities and Stochastic Process",
        student: "Rahul Gunaseelan",
        rollNo: "20I337",
        cleared: true,
    },
    {
        name: "Statistics, Probabilities and Stochastic Process",
        student: "Rahul Gunaseelan",
        rollNo: "20I337",
        cleared: false,
    },
    {
        name: "Advanced Data Structures",
        student: "Rahul Gunaseelan",
        rollNo: "20I337",
        cleared: true,
    },
];

const Arrear = () => {
    return (
        <div className="py-10">
            {data.length !== 0 ? (
                <div className="py-10 flex flex-wrap flex-row w-full overflow-y-auto h-[80.6vh] justify-center">
                    {data.map((item, idx) => (
                        <div className="flex flex-col bg-white sm:flex-row p-5 m-5 gap-3 items-center rounded-xl bg-opacity-90 backdrop-filter backdrop-blur-lg h-fit sm:h-48 ">
                            {item.cleared ? (
                                <div className="flex flex-col items-center">
                                    <CheckCircleIcon className="h-28 text-green-600 text-opacity-70" />
                                    <div class="px-5 py-5 border-b border-gray-200  text-sm">
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
                                    <XCircleIcon className="h-28 text-red-600 text-opacity-85" />
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

                            <div className="flex flex-col text-center sm:text-left">
                                <div className="font-bold w-48 text-lg tracking-wider text-slate-700">
                                    {item.student}
                                </div>
                                <div className="font-bold w-48  text-lg tracking-wider text-slate-700 pb-5">
                                    {item.rollNo}
                                </div>
                                <div className="font-bold w-48 text-md tracking-wider text-slate-700 py-1 capitalize">
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
