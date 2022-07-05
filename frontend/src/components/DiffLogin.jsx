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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Navbar />
            <motion.div
                exit={{ opacity: 0 }}
                className="bg-gradient-to-t from-slate-500 to-[#fafafa] h-full sm:h-[91.4vh] w-full flex flex-wrap flex-row justify-evenly items-center"
                initial="hidden"
                animate="visible"
                variants={list}
            >
                <Link to="/login">
                    <motion.button
                        variants={item}
                        className={`btn1 shadow-xl btn-1`}
                    >
                        <div className="overla uppercase para">
                            <p>Student</p>
                        </div>
                    </motion.button>
                </Link>
                <Link to="/staffLogin">
                    <motion.button
                        variants={item}
                        className={`btn1 shadow-xl btn-2`}
                    >
                        <div className="overla uppercase para">
                            <p>Staff</p>
                        </div>
                    </motion.button>
                </Link>
                <Link to="/login">
                    <motion.button
                        variants={item}
                        className={`btn1 shadow-xl btn-3`}
                    >
                        <div className="overla uppercase para">
                            <p>Parent</p>
                        </div>
                    </motion.button>
                </Link>
                <Link to="/login">
                    <motion.button
                        variants={item}
                        className={`btn1 shadow-xl btn-4`}
                    >
                        <div className="overla uppercase para">
                            <p>Alumni</p>
                        </div>
                    </motion.button>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default DiffLogin;
