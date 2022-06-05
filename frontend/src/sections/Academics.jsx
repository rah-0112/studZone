import React from "react";
import Table from "../components/Table";
import Select from "../components/Select";

const Academics = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center w-full h-full">
            <div className="hidden flex-[0.2] mx-2 lg:flex">
                <div className="h-full w-full flex flex-col items-center">
                    {[
                        "done",
                        "done",
                        "done",
                        "done",
                        null,
                        null,
                        null,
                        null,
                    ].map((ele, index) => (
                        <button
                            key={index}
                            className={`w-24 bg-[#FF844B] font-bold text-white p-2 rounded-full m-3 hover:bg-[#ae603c] transition duration-300 ${
                                ele === null
                                    ? "opacity-25 cursor-not-allowed transition-none transform-none"
                                    : "opacity-100"
                            }`}
                        >
                            {`Sem ${index}`}
                        </button>
                    ))}
                </div>
            </div>
            <div className="lg:hidden flex w-full ">
                <Select />
            </div>
            <div className="flex-1 lg:flex-[0.8] h-[60vh] w-full lg:w-[60vw]">
                <Table />
            </div>
        </div>
    );
};

export default Academics;
