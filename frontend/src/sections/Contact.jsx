import React, { useEffect, useRef, useState } from "react";
import address from "../assets/address.png";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { API } from "../api";

const Contact = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const phonenoRef = useRef("");
    const messageRef = useRef("");
    const typeRef = useRef("");
    const type1Ref = useRef("");
    const [setName, setNameHandler] = useState("");
    const [setEmail, setEmailHandler] = useState("");
    const [setPhoneno, setPhonenoHandler] = useState("");
    const [setReplyType, setReplyTypeHandler] = useState("");
    const [setMessage, setMessageHandler] = useState("");
    const [setLoading, setLoadingHandler] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPhoneno, setIsPhoneno] = useState(false);
    const [isMessage, setIsMessage] = useState(false);

    useEffect(() => {
        if (
            !setEmail.match("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
        ) {
            if (setEmail === "") {
                setIsEmail(false);
                return;
            }
            setIsEmail(true);
        } else {
            setIsEmail(false);
        }
    }, [setEmail]);
    useEffect(() => {
        if (!setName.match("^[a-zA-Z_ .]*$")) {
            setIsName(true);
        } else {
            setIsName(false);
        }
    }, [setName]);
    useEffect(() => {
        if (!setPhoneno.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
            if (setPhoneno === "") {
                setIsPhoneno(false);
                return;
            }
            setIsPhoneno(true);
        } else {
            setIsPhoneno(false);
        }
    }, [setPhoneno]);
    useEffect(() => {
        if (setMessage.length > 150) {
            setIsMessage(true);
        } else {
            setIsMessage(false);
        }
    }, [setMessage]);

    const submitHandler = async () => {
        if (
            setName.length > 0 &&
            setEmail.length > 0 &&
            setPhoneno.length > 0 &&
            setMessage.length > 0 &&
            !isEmail &&
            !isPhoneno &&
            !isMessage &&
            !isName
        ) {
            setLoadingHandler(true);
            await axios.post(API + "/student/addMessage", {
                name: setName,
                email: setEmail,
                phoneno: setPhoneno,
                replytype: setReplyType,
                message: setMessage,
            });
            toggle();
            setNameHandler("");
            setEmailHandler("");
            setPhonenoHandler("");
            setReplyTypeHandler("");
            setMessageHandler("");
            setLoadingHandler(false);
        }
    };

    const list = {
        show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        hidden: { opacity: 0 },
    };
    const item = {
        show: {
            opacity: 1,
            transition: {},
        },
        hidden: { opacity: 0 },
    };

    const [element, animation] = useScroll();
    const heading = {
        hidden: { x: -200, opacity: 0 },
        show: { x: 0, opacity: 1 },
    };
    const reveal = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    const toggle = () => {
        document.getElementById("slide2").classList.add("show");
        setTimeout(() => {
            document.getElementById("slide2").classList.remove("show");
        }, 3000);
    };

    return (
        <motion.div
            className="pt-5 pl-10 pr-10 pb-5 md:pb-14 md:mt-14 bg-image"
            ref={element}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h2
                className={`font-bold leading-tight md:text-2xl sm:text-xl mt-0 mb-2 flex flex-row items-center w-full md:pl-20 md:pr-20 lg:pl-28 lg:pr-28`}
                variants={heading}
                animate={animation}
                transition={{ duration: 1 }}
            >
                Contact us
                <div className="w-1.5 h-5 sm:w-2 sm:h-6 ml-3 bg-[#FF844B]"></div>
            </motion.h2>
            <div className="w-full h-full flex flex-wrap justify-evenly mt-8 mb-10 items-center gap-8 lg:gap-0">
                <motion.div
                    className="flex w-[22rem] sm:w-[22rem] xl:w-[25rem] flex-col items-center md:gap-5 gap-0"
                    variants={reveal}
                    animate={animation}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <p class="text-gray-600 text-xl font-light w-full pb-20">
                        Feel like contacting us? Sumbit your queries here and we
                        will get back to you as soon as possible.
                    </p>
                    <div className="flex flex-col">
                        <motion.img
                            src={address}
                            alt="address"
                            className="sm:max-w-sm sm:max-h-sm"
                            initial={{
                                y: 10,
                            }}
                            animate={{
                                y: 30,
                            }}
                            transition={{
                                duration: 1,
                                repeat: "Infinity",
                                repeatType: "reverse",
                            }}
                        />
                        <svg
                            width="120"
                            height="140"
                            viewBox="0 0 134 141"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.circle
                                opacity="0.4"
                                cx="67"
                                cy="70"
                                r="40"
                                fill="#FF844B"
                                initial={{ scale: 0.9, opacity: 0.2 }}
                                animate={{ scale: 1, opacity: 0.4 }}
                                transition={{
                                    duration: 2,
                                    repeat: "Infinity",
                                    type: "tween",
                                    repeatType: "reverse",
                                }}
                            />
                            <motion.circle
                                cx="67"
                                cy="71"
                                r="15"
                                fill="#FF844B"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    duration: 1,
                                    repeat: "Infinity",
                                    type: "tween",
                                    repeatType: "reverse",
                                }}
                            />
                            <motion.ellipse
                                opacity="0.25"
                                cx="67"
                                cy="70.5"
                                rx="67"
                                ry="70.5"
                                fill="#FF844B"
                                initial={{ scale: 0.9, opacity: 0.1 }}
                                animate={{ scale: 1, opacity: 0.25 }}
                                transition={{
                                    duration: 2,
                                    repeat: "Infinity",
                                    type: "tween",
                                    repeatType: "reverse",
                                }}
                            />
                        </svg>
                    </div>
                </motion.div>
                <div class="flex">
                    <motion.form
                        class="w-full xl:max-w-xl md:max-w-md lg:max-w-lg rounded-3xl shadow-lg flex flex-col md:px-14 px-8 py-8 bg-[#fafafa]"
                        variants={list}
                        animate={animation}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <motion.h3
                            className="font-bold leading-tight text-2xl mt-0 mb-10"
                            variants={item}
                        >
                            Send us a message
                        </motion.h3>

                        <motion.div className="name relative" variants={item}>
                            <label
                                htmlFor="name"
                                className={`${
                                    isName ? "text-red-500" : "black"
                                } font-semibold`}
                            >
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                ref={nameRef}
                                value={setName}
                                type="text"
                                onChange={() =>
                                    setNameHandler(nameRef.current.value)
                                }
                                placeholder="Your name"
                                required
                                className={`bg-transparent relative font-medium outline-none focus:outline-none w-full mb-4 mt-3 rounded-2xl bg-gray-50 py-2 px-3 ring-2 duration-300 focus-within:ring-slate-500 ${
                                    isName
                                        ? "ring-red-500 focus:ring-red-500"
                                        : "ring-gray-200"
                                } border-2 border-transparent`}
                            />
                            {isName && (
                                <span className="text-red-500 font-medium absolute right-2 top-[0] ">
                                    Invalid Name
                                </span>
                            )}
                        </motion.div>
                        <motion.div className="phone relative" variants={item}>
                            <label
                                htmlFor="phone"
                                className={`${
                                    isPhoneno ? "text-red-500" : "black"
                                } font-semibold`}
                            >
                                Phone Number{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="phone"
                                ref={phonenoRef}
                                value={setPhoneno}
                                onChange={() =>
                                    setPhonenoHandler(phonenoRef.current.value)
                                }
                                type="text"
                                required
                                placeholder="Your phone number"
                                className={`bg-transparent relative font-medium outline-none focus:outline-none w-full mb-4 mt-3 rounded-2xl bg-gray-50 px-3 py-2 ring-2 duration-300 focus-within:ring-slate-500 ${
                                    isPhoneno
                                        ? "ring-red-500 focus:ring-red-500"
                                        : "ring-gray-200"
                                } border-2 border-transparent`}
                            />
                            {isPhoneno && (
                                <>
                                    <span className="text-red-500 font-medium absolute right-2 top-[0] sm:block hidden">
                                        Invalid Phone Number
                                    </span>
                                    <span className="text-red-500 font-medium absolute right-2 top-[0] block sm:hidden ">
                                        Invalid
                                    </span>
                                </>
                            )}
                        </motion.div>
                        <motion.div className="email relative" variants={item}>
                            <label
                                htmlFor="email"
                                className={`${
                                    isEmail ? "text-red-500" : "black"
                                } font-semibold`}
                            >
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                ref={emailRef}
                                value={setEmail}
                                onChange={() =>
                                    setEmailHandler(emailRef.current.value)
                                }
                                type="text"
                                required
                                placeholder="Your email"
                                className={`bg-transparent relative font-medium outline-none focus:outline-none w-full mb-4 mt-3 rounded-2xl bg-gray-50 px-3 py-2 ring-2 duration-300 focus-within:ring-slate-500 ${
                                    isEmail
                                        ? "ring-red-500 focus:ring-red-500"
                                        : "ring-gray-200"
                                } border-2 border-transparent`}
                            />
                            {isEmail && (
                                <span className="text-red-500 font-medium absolute right-2 top-[0] ">
                                    Invalid Email
                                </span>
                            )}
                        </motion.div>
                        <motion.div className="pb-4" variants={item}>
                            <h3 className="font-semibold">
                                Preferred way of Communication{" "}
                                <span className="text-red-500">*</span>
                            </h3>
                            <div class="flex flex-row justify-center items-center mt-2 py-1 gap-5">
                                <div className="flex items-center flex-row">
                                    <input
                                        type="radio"
                                        class="form-radio"
                                        name="Phone"
                                        value="Phone"
                                        id="personal"
                                        checked={setReplyType === "Phone"}
                                        ref={typeRef}
                                        onChange={() =>
                                            setReplyTypeHandler(
                                                typeRef.current.value
                                            )
                                        }
                                    />
                                    <label class="ml-2" htmlFor="personal">
                                        Phone
                                    </label>
                                </div>
                                <div className="flex items-center flex-row justify-center">
                                    <input
                                        id="emailRadio"
                                        type="radio"
                                        class="form-radio"
                                        name="Email"
                                        value="Email"
                                        ref={type1Ref}
                                        checked={setReplyType === "Email"}
                                        onChange={() =>
                                            setReplyTypeHandler(
                                                type1Ref.current.value
                                            )
                                        }
                                    />
                                    <label class="ml-2" htmlFor="emailRadio">
                                        Email
                                    </label>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="message relative"
                            variants={item}
                        >
                            <label
                                for="Messages"
                                className={`${
                                    isMessage ? "text-red-500" : "black"
                                } font-semibold`}
                            >
                                Message
                            </label>
                            <TextareaAutosize
                                id="Messages"
                                ref={messageRef}
                                onChange={() => {
                                    setMessageHandler(messageRef.current.value);
                                }}
                                minRows={3}
                                value={setMessage}
                                placeholder="Your message"
                                maxRows={12}
                                className={`bg-transparent relative font-medium outline-none focus:outline-none duration-300 focus-within:ring-slate-500 resize-none w-full mb-5 mt-3 rounded-2xl bg-gray-50 px-3 py-2 ring-2 ${
                                    isMessage
                                        ? "ring-red-500  focus:ring-red-500"
                                        : "ring-gray-200"
                                } border-2 border-transparent`}
                                required
                            />
                            {isMessage && (
                                <>
                                    <span className="text-red-500 font-medium absolute right-0 top-0 hidden sm:block">
                                        Characters exceeding 150
                                    </span>
                                    <span className="text-red-500 font-medium absolute right-0 top-0 block sm:hidden">
                                        {"> 150"}
                                    </span>
                                </>
                            )}
                        </motion.div>
                        <motion.button
                            variants={item}
                            type="sumbit"
                            className={`inline-flex items-center w-full px-4 py-2 font-semibold leading-6 text-sm shadow rounded-full text-white bg-[#FF844B] hover:bg-[#cb6231] transition ease-in-out duration-150 justify-center ${
                                setLoading ? "disabled cursor-not-allowed" : ""
                            }`}
                            onClick={submitHandler}
                        >
                            <svg
                                className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${
                                    setLoading ? "block" : "hidden"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            {setLoading ? "Sending..." : "Send"}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
            <div id="slide2" className="flex flex-row gap-2">
                <CheckCircleIcon className="w-6 h-6" />
                <div className="tracking-wider">Message Sent Successfully!</div>
            </div>
        </motion.div>
    );
};

export default Contact;
