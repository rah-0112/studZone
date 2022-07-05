import React, { useState } from "react";
import Table from "../components/Table";
import Select from "../components/Select";
import { RefreshIcon } from "@heroicons/react/solid";

const Academics = () => {
    const [sem, setSem] = useState([
        {
            sem: "1",
            current: true,
            table: <Table sem_no={1} />,
        },
        {
            sem: "2",
            current: false,
            table: <Table sem_no={2} />,
        },
        {
            sem: "3",
            current: false,
            table: <Table sem_no={3} />,
        },
        {
            sem: "4",
            current: false,
            table: <Table sem_no={4} />,
        },
        {
            sem: "5",
            current: false,
            table: <Table sem_no={5} />,
        },
        {
            sem: "6",
            current: false,
            table: <Table sem_no={6} />,
        },
        {
            sem: "7",
            current: false,
            table: <Table sem_no={7} />,
        },
        {
            sem: "8",
            current: false,
            table: <Table sem_no={8} />,
        },
    ]);

    const setOtherFalse = (index) => {
        setSem((vals) =>
            vals.map((val, idx) =>
                idx === index
                    ? { ...val, current: true }
                    : { ...val, current: false }
            )
        );
    };

    return (
        <div className="h-full flex items-center lg:justify-start justify-center w-full lg:h-[91vh]  mt-0.5 flex-col">
            <button
                className="py-10 flex items-center gap-1 slate-100 text-slate-500 font-semibold underline"
                onClick={() => {
                    setOtherFalse(0);
                }}
            >
                Refresh <RefreshIcon className="w-5 h-5 text-[#FF844B]" />
            </button>
            <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center w-full">
                <div className="hidden flex-[0.2] mx-2 lg:flex">
                    <div className="h-full w-full flex flex-col items-center">
                        {sem.map((ele, index) => (
                            <button
                                key={index}
                                className={`w-24 font-bold p-2 rounded-full m-3 transition duration-300 ${
                                    ele.current
                                        ? "bg-[#FF844B] text-slate-100"
                                        : "text-slate-600"
                                }`}
                                onClick={() => {
                                    setOtherFalse(index);
                                }}
                            >
                                {`Sem ${index + 1}`}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="lg:hidden flex w-full ">
                    <Select setOtherFalse={setOtherFalse} />
                </div>
                <div className="flex-1 lg:flex-[0.8] h-full lg:h-[68vh] w-full lg:w-[60vw] pb-10 md:pb-14">
                    {sem.map((item, idx) => item.current && item.table)}
                </div>
            </div>
        </div>
    );
};

export default Academics;
