import React from "react";
import { ReactComponent as Logo } from "../assets/ProfileArrow.svg";
import logo1 from "../assets/ProfileImage.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <motion.div className="absolute mt-28" exit={{ opacity: 0 }}>
            <div className="grid grid-cols-1 place-items-center w-[100vw] h-[80vh] rounded-lg">
                <div className="absolute top-12 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                        src={logo1}
                        className="rounded-full h-50 w-50 sm:h-full sm:w-full md:max-h-80 md:max-w-80"
                        alt=""
                    ></img>
                </div>
                <div className="bg-[#4E7D96] h-[60vh] xl:w-[50vw] lg:w-[50vw] w-3/4 grid grid-cols-1 place-items-center rounded-3xl text-teal-50">
                    <div className="text-center flex flex-col gap-4 w-3/4 mt-12 lg:mt-8 md:mt-10 sm:mt-8  break-words">
                        <div className="font-bold sm:font-extrabold sm:tracking-widest text-3xl">
                            KARTHICK V
                        </div>
                        <div className=" font-medium">20I316</div>
                        <div className="font-medium tracking-wide text-lg ">
                            INFORMATION TECHNOLOGY
                        </div>
                        <div className="font-medium">
                            433,7th middle street thiyagarajanagar, tirunelveli,
                            Tamil Nadu - 630020
                        </div>
                    </div>
                </div>
                <Link to="/details">
                    <div className="xl:w-[50vw] lg:w-[50vw] w-3/4 h-5/6 flex flex-row items-center justify-center">
                        <button className=" w-5/6 h-5/6 xl:w-2/6 lg:w-3/6 md:w-2/6  bg-[#FF844B] font-bold text-white p-2 rounded-full flex flex-row items-center justify-center gap-3">
                            <div>MY DETAILS</div>
                            <div>
                                <Logo />
                            </div>
                        </button>
                    </div>
                </Link>
            </div>
        </motion.div>
    );
};

export default Profile;
