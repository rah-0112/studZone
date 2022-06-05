import React, { useState } from "react";
import { ReactComponent as Background } from "../assets/LoginBG.svg";
import LBg from "../assets/loginleft.png";
import Line from "../assets/Line.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
    const [rollno, setRollno] = useState("");
    const [password, setPassword] = useState("");
    const [errorRno, setErrorRno] = useState(false);
    const [errorPass, setErrorPass] = useState(false);

    const submitButton = (e) => {
        setErrorPass(false);
        setErrorRno(false);
        e.preventDefault();
        if (
            rollno.match("^[0-9]{2}[A-Z||a-z][0-9]{3}$") ||
            rollno.match("^[0-9]{2}[A-Z||a-z]{2}[0-9]{2}$")
        ) {
            if (password.match("^[0-9]{2}[A-Z||a-z]{3}[0-9]{2}$")) {
                console.log(rollno + " " + password);
                setRollno("");
                setPassword("");
            } else {
                setErrorPass(true);
            }
        } else {
            setErrorRno(true);
            console.log("invalid login credential");
        }
    };

    return (
        <motion.div
            className="grid place-items-center h-screen relative bg-[#FAFAFA] overflow-hidden max-h-[90vh]"
            exit={{ opacity: 0 }}
        >
            <div className="w-[100vw] max-h-[100vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Background className="w-[100vw] max-h-[100vh]" />
            </div>
            <div className="bg-white h-[80vh] w-[80vw] relative grid lg:grid-cols-2 place-items-center md:grid-cols-1 gap-4">
                <img
                    src={LBg}
                    className="w-[50vw] h-[70vh] hidden lg:block bg-black"
                    alt=""
                ></img>

                <div className="grid grid-cols-1 gap-4">
                    <div className="flex flex-row mb-10">
                        <div className="text-[3rem] font-bold">Login</div>

                        <img
                            src={Line}
                            alt=""
                            className="ml-5 lg:h-20 md:h-15"
                        ></img>
                    </div>
                    <div className="lg:w-[25vw]">
                        <div>
                            <div className="font-bold mb-4 grid grid-cols-2">
                                <div>Rollno</div>
                                {errorRno && (
                                    <span className="text-red-500 font-medium right-2 top-[3.8rem] text-right ">
                                        Invalid Rollno
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
                                value={rollno}
                                onChange={(e) => setRollno(e.target.value)}
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
                                type="text"
                                placeholder="Your password"
                                required
                                className={`outline outline-[#b5b5b5] focus:outline-[#FF844B] font-medium w-full mb-6 rounded-xl bg-gray-50 p-2 focus:ring-[#FF844B] ring-2 ${
                                    errorPass && "outline-[#f11818]"
                                } `}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <Link to="/profile">
                            <button
                                className="w-60 bg-[#FF844B] font-bold text-white p-2 rounded-full"
                                // onClick={(e) => submitButton(e)}
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;
