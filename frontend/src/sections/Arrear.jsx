import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import React from "react";
import NoReccords from "../components/NoReccords";
import axios from "axios";
import { StudzoneState } from "../Context";

const Arrear = () => {
    const [data, setData] = React.useState([]);
    const { user } = StudzoneState();

    React.useEffect(() => {
        const fn = async () => {
            var record = await axios.post(
                "http://localhost:5000/student/arrear",
                {
                    rollno: user.id,
                    //   sem_no: sem_no,
                }
            );
            console.log(record);
            record = record.data.data.rows;
            setData([]);
            record.map((eachpaper) => {
                var rec = {
                    name: eachpaper.paper_name,
                    cleared: eachpaper.cleared,
                };
                setData((data) => [...data, rec]);
            });
        };
        fn();
    }, []);

    return (
        <div className="py-10">
            {data.length !== 0 ? (
                <div className="py-10 flex flex-wrap flex-row w-full overflow-y-auto h-[80.6vh] justify-center">
                    {data.map((item, idx) => (
                        <div className="flex flex-col bg-white sm:flex-row p-5 m-5 gap-3 items-center rounded-xl bg-opacity-90 backdrop-filter backdrop-blur-lg h-fit sm:h-48">
                            {item.cleared ? (
                                <div className="flex flex-col items-center">
                                    <CheckCircleIcon className="h-20 text-green-600 text-opacity-70" />
                                    <div class="px-5 py-3 text-sm">
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
                                    <div class="px-5 py-3 text-sm">
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

                            <div className="font-bold w-48 text-lg tracking-wider text-slate-700 py-1 text-center uppercase">
                                {item.name}
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
