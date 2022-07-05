import React from "react";
import { DatabaseIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const NoReccords = ({ heading }) => {
    return (
        <motion.div className="w-full flex flex-row items-center justify-center pl-7 pr-7 md:pl-20 md:pr-20 lg:pl-32 lg:pr-32 font-pop text-2xl font-bold tracking-wider leading-loose text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-700 text-center">
            <div className="w-full  flex flex-row items-center justify-center h-[80vh] mt-1">
                No data found regarding {heading}
                <em>
                    <DatabaseIcon className="ml-2 h-6 w-6 text-slate-600 " />
                </em>
            </div>
        </motion.div>
    );
};

export default NoReccords;
