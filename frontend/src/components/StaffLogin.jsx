import React, { useState } from "react";
import { ReactComponent as Background } from "../assets/LoginBG.svg";
import LBg from "../assets/loginleft.png";
import Line from "../assets/Line.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import axios from "axios";
import { StudzoneState } from "../Context";
import { InformationCircleIcon, XCircleIcon } from "@heroicons/react/solid";

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.4,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
};

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
    transition: {
        duration: 1,
    },
};

const Login = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [errorRno, setErrorRno] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const { setUser } = StudzoneState();

    const submitButton = async (e) => {
        setErrorPass(false);
        setErrorRno(false);
        e.preventDefault();
        if (userId.match("[0-9A-Z]{5}")) {
            if (password.match("[A-Z0-9-]{10}")) {
                const { data } = await axios.post(
                    "http://localhost:5000/staff/login",
                    { userId, password }
                );
                if (data === "1") {
                    setUser({ id: userId });
                    localStorage.setItem(
                        "profile",
                        JSON.stringify({ id: userId })
                    );
                    navigate("/staff", { replace: true });
                } else {
                    toggle();
                }
                setUserId("");
                setPassword("");
            } else {
                setErrorPass(true);
                toggle1();
            }
        } else {
            setErrorRno(true);
            toggle1();
        }
    };

    const toggle = () => {
        document.getElementById("slide1").classList.add("show");
        setTimeout(() => {
            document.getElementById("slide1").classList.remove("show");
        }, 3000);
    };

    const toggle1 = () => {
        document.getElementById("slide").classList.add("show");
        setTimeout(() => {
            document.getElementById("slide").classList.remove("show");
        }, 3000);
    };

    return (
        <div className="">
            <Navbar />
            <motion.div
                className="grid place-items-center h-screen relative bg-[#FAFAFA] overflow-hidden max-h-[90vh]"
                exit={{ opacity: 0 }}
            >
                <div className="w-[100vw] max-h-[100vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Background className="w-[100vw] max-h-[100vh]" />
                </div>
                <div className="bg-white h-[80vh] w-[80vw] relative grid lg:grid-cols-2 place-items-center md:grid-cols-1 gap-4">
                    <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        src={LBg}
                        className="w-[50vw] h-[70vh] hidden lg:block bg-black"
                        alt=""
                    ></motion.img>

                    <motion.div
                        className="grid grid-cols-1 gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={list}
                    >
                        <motion.div
                            className="flex flex-row mb-10"
                            variants={item}
                        >
                            <div className="text-[3rem] font-bold">Login</div>

                            <img
                                src={Line}
                                alt=""
                                className="ml-5 lg:h-20 md:h-15"
                            ></img>
                        </motion.div>
                        <motion.div className="lg:w-[25vw]" variants={item}>
                            <div>
                                <div className="font-bold mb-4 grid grid-cols-2">
                                    <div>User Id</div>
                                    {errorRno && (
                                        <span className="text-red-500 font-medium right-2 top-[3.8rem] text-right ">
                                            Invalid User Id
                                        </span>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    placeholder="Your rollno"
                                    required
                                    className={`outline outline-[#b5b5b5] focus:outline-[#FF844B] font-medium w-full mb-6 rounded-xl bg-gray-50 p-2 focus:ring-[#FF844B] ring-2 ${
                                        errorRno && "outline-[#f11818]"
                                    } `}
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                />
                            </div>
                            <div>
                                <div className="font-bold mb-4 grid grid-cols-2">
                                    <div>Password</div>
                                    {errorPass && (
                                        <span className="text-red-500 font-medium right-2 top-[3.8rem] text-right ">
                                            Invalid Password
                                        </span>
                                    )}
                                </div>
                                <input
                                    type="password"
                                    placeholder="Your password"
                                    required
                                    className={`outline outline-[#b5b5b5] focus:outline-[#FF844B] font-medium w-full mb-6 rounded-xl bg-gray-50 p-2 focus:ring-[#FF844B] ring-2 ${
                                        errorPass && "outline-[#f11818]"
                                    } `}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            className="grid place-items-center"
                            variants={item}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-60 bg-[#FF844B] font-bold text-white p-2 rounded-full"
                                onClick={(e) => submitButton(e)}
                            >
                                Login
                            </motion.button>
                        </motion.div>
                        <div id="slide1" className="flex flex-row gap-2">
                            <XCircleIcon className="w-6 h-6" />
                            <div className="tracking-wider">
                                Invalid Login Credentials
                            </div>
                        </div>
                        <div id="slide" className="flex flex-row gap-2">
                            <InformationCircleIcon className="w-6 h-6" />
                            <div className="tracking-wider">
                                Check your username and password
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
