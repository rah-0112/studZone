import React from "react";
import { DatabaseIcon } from "@heroicons/react/solid";

const NoReccords = ({ heading }) => {
    return (
        <div className="w-full flex flex-row items-center justify-center h-[60vh] pl-7 pr-7 md:pl-20 md:pr-20 lg:pl-32 lg:pr-32 mt-20 font-pop text-2xl font-bold tracking-wider leading-loose text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700 text-center">
            <div className="w-full  flex flex-row items-center justify-center">
                No data found regarding {heading}
                <em>
                    <DatabaseIcon className="ml-2 h-6 w-6 text-slate-600 " />
                </em>
            </div>
        </div>
    );
};

export default NoReccords;