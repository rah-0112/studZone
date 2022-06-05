import { motion } from "framer-motion";
import React from "react";

const Heading = ({ heading, classes }) => {
    return (
        <motion.h2
            className={`font-bold leading-tight md:text-2xl sm:text-xl mt-0 mb-2 flex flex-row items-center w-full md:pl-20 md:pr-20 lg:pl-28 lg:pr-28 ${classes}`}
        >
            {heading}
            <div className="w-1.5 h-5 sm:w-2 sm:h-6 ml-3 bg-[#FF844B]"></div>
        </motion.h2>
    );
};

export default Heading;
