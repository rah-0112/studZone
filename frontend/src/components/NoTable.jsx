import { DatabaseIcon } from "@heroicons/react/solid";
import React from "react";

const NoTable = () => {
    return (
        <div className="grid place-items-center max-w-7xl h-[68vh] bg-slate-100 rounded-xl">
            <div className="w-full  flex flex-row items-center justify-center text-slate-600 font-bold text-xl leading-wider capitalize">
                No data found regarding this Semester
                <em>
                    <DatabaseIcon className="ml-2 h-6 w-6 text-slate-600 " />
                </em>
            </div>
        </div>
    );
};

export default NoTable;
