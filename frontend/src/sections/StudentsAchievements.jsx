import React, { useState } from "react";
import NoReccords from "../components/NoReccords";

const data = [
    {
        name: "Student 1",
        rollNo: "20I337",
        date: "10/7/2021",
        document: "Certificate1.pdf",
        link: "https://rahul.com",
        description:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    },
    {
        name: "Student 2",
        rollNo: "20I337",
        date: "5/6/2022",
        document: "Certificate1.pdf",
        link: "https://rahul.com",
        description:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    },
    {
        name: "Student 3",
        rollNo: "20I337",
        date: "1/28/2022",
        document: "Certificate1.pdf",
        link: "https://rahul.com",
        description:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
        name: "Student 4",
        rollNo: "20I337",
        date: "10/7/2021",
        document: "Certificate1.pdf",
        link: "https://rahul.com",
        description:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    },
    {
        name: "Student 5",
        rollNo: "20I337",
        date: "10/7/2021",
        document: "Certificate1.pdf",
        link: "https://rahul.com",
        description:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    },
    {
        name: "Student 6",
        rollNo: "20I337",
        date: "5/6/2022",
        document: "Certificate1.pdf",
        link: "https://rahul.com",
        description:
            "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    },
    {
        name: "Student 7",
        rollNo: "20I337",
        date: "1/28/2022",
        document: "Certificate1.pdf",
        link: "https://rahul.com",
        description:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
        name: "Student 8",
        rollNo: "20I337",
        date: "10/7/2021",
        document: "Certificate1.pdf",
        link: "https://rahul.com",
        description:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    },
];

const StudentsAchievements = () => {
    const [q, setQ] = useState("");
    const [searchParam] = useState(["rollNo", "name"]);

    const search = (items) => {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    };

    return (
        <div>
            {data.length !== 0 ? (
                <div className="flex flex-col gap-5 px-7 pt-20 sm:h-[91.4vh] pb-16 h-full items-center sm:items-stretch">
                    <div className="flex sm:flex-row sm:justify-between items-center flex-col sm:gap-0 gap-8">
                        <div className="w-fit bg-[#FF844B] font-bold text-white py-2 px-4 rounded-full flex items-center justify-center flex-row text-md">
                            Students Achievements
                        </div>
                        <div>
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-slate-100"
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
                                    className="block p-3 pl-10 w-[85vw] sm:w-72 text-sm text-slate-100 bg-slate-500 rounded-full border border-gray-300 placeholder:text-slate-100 font-semibold outline-none "
                                    placeholder="Search students"
                                    required
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute right-2.5 bottom-2.5 bg-[#FF844B] hover:bg-[#e3723d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-1"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-72 flex-1 flex h-full flex-col mt-5 p-1 pr-2 sm:overflow-auto sm:w-full">
                        {search(data).map((item, index) => (
                            <div
                                className="w-full my-3 py-2 shadow-lg rounded-lg bg-slate-100 flex flex-col gap-2 sm:flex-row justify-around items-center"
                                key={index}
                            >
                                <div className="font-bold text-slate-600 px-3 flex-[0.4] text-center text-lg">
                                    {item.name}
                                </div>
                                <div className="font-bold text-[#FF844B] px-3 flex-[0.2] text-lg ">
                                    {item.rollNo}
                                </div>
                                <div className="font-bold text-slate-600 px-3 flex-[0.2]">
                                    {item.date}
                                </div>
                                <a
                                    className="font-bold text-slate-600 px-3 flex-[0.2] underline cursor-pointer"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.document}
                                </a>
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

export default StudentsAchievements;
