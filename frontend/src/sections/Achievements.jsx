import React from "react";
import NoReccords from "../components/NoReccords";
import { motion } from "framer-motion";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { PencilIcon } from "@heroicons/react/solid";
import { DownloadIcon } from "@heroicons/react/outline";

const data = [
    {
        name: "Coluber constrictor",
        date: "10/7/2021",
        document: "Certificate1.pdf",
        description:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    },
    {
        name: "Eolophus roseicapillus",
        date: "5/6/2022",
        document: "Certificate1.pdf",
        description:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    },
    {
        name: "Acridotheres tristis",
        date: "1/28/2022",
        document: "Certificate1.pdf",
        description:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
        name: "Anastomus oscitans",
        date: "10/7/2021",
        document: "Certificate1.pdf",
        description:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    },
    {
        name: "Coluber constrictor",
        date: "10/7/2021",
        document: "Certificate1.pdf",
        description:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    },
    {
        name: "Eolophus roseicapillus",
        date: "5/6/2022",
        document: "Certificate1.pdf",
        description:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    },
    {
        name: "Acridotheres tristis",
        date: "1/28/2022",
        document: "Certificate1.pdf",
        description:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
        name: "Anastomus oscitans",
        date: "10/7/2021",
        document: "Certificate1.pdf",
        description:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    },
];

const Achievements = () => {
    return (
        <div>
            {data.length !== 0 ? (
                <div className="flex flex-col gap-5 px-7 pt-20 sm:h-[91.4vh] pb-16 h-full items-center sm:items-stretch">
                    <div className="flex sm:flex-row sm:justify-between items-center flex-col sm:gap-0 gap-8">
                        <motion.button className="w-fit bg-[#FF844B] font-semibold text-white py-2 px-4 rounded-full hover:bg-[#e3723d] flex items-center justify-center flex-row">
                            Add achievement{" "}
                            <PlusCircleIcon
                                height={20}
                                width={20}
                                className="m-1"
                            />
                        </motion.button>
                        <form>
                            <label
                                htmlFor="default-search"
                                class="mb-2 text-sm font-medium text-gray-900 sr-only"
                            >
                                Search
                            </label>
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg
                                        class="w-5 h-5 text-slate-100"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    class="block p-3 pl-10 w-[85vw] sm:w-72 text-sm text-slate-100 bg-slate-500 rounded-full border border-gray-300 placeholder:text-slate-100 font-semibold outline-none "
                                    placeholder="Search achievements"
                                    required
                                />
                                <button
                                    type="submit"
                                    class="text-white absolute right-2.5 bottom-2.5 bg-[#FF844B] hover:bg-[#e3723d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-1"
                                >
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-72 flex-1 flex h-full flex-col mt-5 p-1 pr-2 sm:overflow-auto sm:w-full">
                        {data.map((item, index) => (
                            <div
                                className="w-full my-3 py-2 shadow-lg rounded-lg bg-slate-100 flex flex-col gap-2 sm:flex-row justify-around items-center"
                                key={index}
                            >
                                <div className="font-bold text-slate-600 px-3 flex-[0.4] text-center text-lg">
                                    {item.name}
                                </div>
                                <div className="font-bold text-slate-600 px-3 flex-[0.2]">
                                    {item.date}
                                </div>
                                <div className="font-bold text-slate-600 px-3 flex-[0.2] underline cursor-pointer">
                                    {item.document}
                                </div>
                                <div className="flex flex-row gap-10 sm:gap-5 ">
                                    <div className="rounded-full flex items-center justify-center duration-300 text-slate-500 flex-[0.1]">
                                        <button>
                                            <PencilIcon className="h-6 w-6 hover:text-slate-700" />
                                        </button>
                                    </div>
                                    <button className="rounded-full flex items-center justify-center duration-300 p-1 text-slate-500 flex-[0.1] hover:text-slate-700">
                                        <button>
                                            <DownloadIcon className="h-6 w-6" />
                                        </button>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <NoReccords heading="Achievements" />
            )}
        </div>
    );
};

export default Achievements;
