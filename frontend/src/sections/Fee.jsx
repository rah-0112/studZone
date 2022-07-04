import { CheckCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import NoReccords from "../components/NoReccords";
import { StudzoneState } from "../Context";

const Fee = () => {
    const [fees, setFees] = useState([]);
    const { user } = StudzoneState();

    const fetchFees = async () => {
        const { data } = await axios.post("http://localhost:5000/student/fee", {
            rollno: user.id,
        });
        setFees(data.data);
    };

    useEffect(() => {
        fetchFees();
    });

    return (
        <div className="py-10">
            {fees.length > 0 ? (
                <div className="py-10 flex flex-wrap flex-row w-full overflow-y-auto h-[80.6vh] justify-center">
                    {fees.map((item, idx) => (
                        <div className="flex flex-col bg-white sm:flex-row p-5 m-5 gap-3 items-center rounded-xl bg-opacity-90 backdrop-filter backdrop-blur-lg h-fit sm:h-48 ">
                            <div className="flex flex-col items-center">
                                <CheckCircleIcon className="h-20 text-green-600 text-opacity-70" />
                                <div class="px-5 py-5 text-sm">
                                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span
                                            aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                        ></span>
                                        <span class="relative">Paid</span>
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col text-center sm:text-left gap-2">
                                <div className="font-bold w-48 text-lg tracking-wider text-slate-700">
                                    {"R_no : "}
                                    {item.receipt_no}
                                </div>
                                <div className="font-bold w-48  text-lg tracking-wider text-slate-700">
                                    {"Amount : "}
                                    {item.fee_paid}
                                </div>
                                <div className="font-bold w-48 text-md tracking-wider text-slate-700 capitalize">
                                    {"Sem_no : "}
                                    {item.sem_no}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <NoReccords heading="Fee" />
            )}
        </div>
    );
};

export default Fee;
