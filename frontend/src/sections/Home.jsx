import React, { useState } from "react";
import BgImage from "../assets/bg.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
    const line = "Welcome to PSG College Of Technology";
    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        transition: { delay: 1, duration: 1 },
    };

    const sentence = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                staggerChildren: 0.08,
            },
        },
    };
    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);

    const imageLoaded = () => {
        setImageLoading(false);
        setTimeout(() => setPulsing(false), 2000);
    };

    return (
        <div className="relative">
            <Navbar classes="absolute top-0 w-full" main={true} />
            <div className={`${pulsing ? "pulse" : ""} loadable`}>
                <motion.img
                    src={BgImage}
                    className="w-full h-[35vh] sm:h-full"
                    alt="bg"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: imageLoading ? 0 : 1,
                    }}
                    transition={{ opacity: { delay: 0.5, duration: 1 } }}
                    onLoad={imageLoaded}
                />
            </div>
            <motion.h1
                className="w-full pl-4 pr-4 md:w-1/2  text-xl sm:text-[1.875rem] md:text-[1.875rem] lg:text-[2.25rem] xl:text-[3rem] mt-0 mb-2 text-white font-pop font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center tracking-wider leading-snug "
                variants={sentence}
                initial="hidden"
                animate="visible"
            >
                {line.split("").map((char, index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                    );
                })}
            </motion.h1>
        </div>
    );
};

export default Home;
