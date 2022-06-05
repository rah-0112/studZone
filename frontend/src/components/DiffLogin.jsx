import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const list = {
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
    hidden: { opacity: 0 },
};
const item = {
    visible: {
        opacity: 1,
        transition: {},
    },
    hidden: { opacity: 0 },
};
const DiffLogin = () => {
    return (
        <>
            <Navbar />
            <motion.div
                exit={{ opacity: 0 }}
                className="bg-gradient-to-t from-slate-500 to-[#fafafa] h-full sm:h-[91.4vh] w-full flex flex-wrap flex-row justify-evenly items-center"
                initial="hidden"
                animate="visible"
                variants={list}
            >
                {["Student", "Teacher", "Parent", "Alumni"].map(
                    (ele, index) => (
                        <Link to="/login">
                            <motion.button
                                variants={item}
                                className={`btn1 shadow-xl btn-${index + 1}`}
                                key={ele}
                            >
                                <div className="overla  uppercase">
                                    <p>{ele}</p>
                                </div>
                            </motion.button>
                        </Link>
                    )
                )}
            </motion.div>
        </>
    );
};

export default DiffLogin;
