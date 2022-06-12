import React, { useState } from "react";
import Select from "../components/Select";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const data = [
    {
        name: "Student 1",
        rollNo: "20I311",
    },
    {
        name: "Student 2",
        rollNo: "20I300",
    },
    {
        name: "Student 3",
        rollNo: "20I301",
    },
    {
        name: "Student 4",
        rollNo: "20I390",
    },
    {
        name: "Student 5",
        rollNo: "20I312",
    },
    {
        name: "Student 6",
        rollNo: "20I311",
    },
    {
        name: "Student 7",
        rollNo: "20I300",
    },
    {
        name: "Student 8",
        rollNo: "20I301",
    },
    {
        name: "Student 9",
        rollNo: "20I390",
    },
    {
        name: "Student 10",
        rollNo: "20I312",
    },
];

const Marks = () => {
    let [isOpen, setIsOpen] = useState(false);
    const [courses, setCourses] = useState([
        {
            courseName: "Course 1",
            current: true,
        },
        {
            courseName: "Course 2",
            current: false,
        },
        {
            courseName: "Course 3",
            current: false,
        },
        {
            courseName: "Course 4",
            current: false,
        },
        {
            courseName: "Course 5",
            current: false,
        },
        {
            courseName: "Course 6",
            current: false,
        },
        {
            courseName: "Course 7",
            current: false,
        },
        {
            courseName: "Course 8",
            current: false,
        },
        {
            courseName: "Course 9",
            current: false,
        },
    ]);

    const [form, setForm] = useState({
        ca1: 0,
        ca2: 0,
        ca3: 0,
        tut1: 0,
        tut2: 0,
        ap: 0,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    function closeModal(e) {
        setIsOpen(false);
        e.preventDefault();
    }

    function openModal() {
        setIsOpen(true);
    }

    const setOtherFalse = (index) => {
        setCourses((vals) =>
            vals.map((val, idx) =>
                idx === index
                    ? { ...val, current: true }
                    : { ...val, current: false }
            )
        );
    };

    const previousMarks = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={closeModal} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-fit transform  rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-bold leading-6 text-gray-900 pb-8"
                                    >
                                        Update Marks
                                    </Dialog.Title>
                                    <form>
                                        <div className="flex flex-col gap-3 h-full w-full">
                                            <div className="flex flex-row gap-3 md:w-full h-full items-center wrap">
                                                <div className=" flex flex-col gap-2">
                                                    <label
                                                        htmlFor="ca1"
                                                        className="form-label inline-block mb-2 text-gray-700 font-medium"
                                                    >
                                                        CA 1
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#FF844B] focus:outline-none"
                                                        id="ca1"
                                                        placeholder="Mark"
                                                        name="ca1"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className=" flex flex-col gap-2">
                                                    <label
                                                        htmlFor="ca2"
                                                        class="form-label inline-block mb-2 text-gray-700 font-medium"
                                                    >
                                                        CA 2
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#FF844B] focus:outline-none"
                                                        id="ca2"
                                                        placeholder="Mark"
                                                        name="ca2"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className=" flex flex-col gap-2">
                                                    <label
                                                        for="ca3"
                                                        class="form-label inline-block mb-2 text-gray-700 font-medium"
                                                    >
                                                        CA 3
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#FF844B] focus:outline-none"
                                                        id="ca3"
                                                        placeholder="Mark"
                                                        name="ca3"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 md:w-full h-full md:flex-row items-center">
                                                <div className="flex flex-row gap-3">
                                                    <div className=" flex flex-col gap-2">
                                                        <label
                                                            for="tut1"
                                                            class="form-label inline-block mb-2 text-gray-700 font-medium"
                                                        >
                                                            Tutorial 1
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#FF844B] focus:outline-none"
                                                            id="tut1"
                                                            placeholder="Mark"
                                                            name="tut1"
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                    <div className=" flex flex-col gap-2">
                                                        <label
                                                            for="tut2"
                                                            class="form-label inline-block mb-2 text-gray-700 font-medium"
                                                        >
                                                            Tutorial 2
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#FF844B] focus:outline-none"
                                                            id="tut2"
                                                            placeholder="Mark"
                                                            name="tut2"
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className=" flex flex-col gap-2">
                                                    <label
                                                        for="ap"
                                                        class="form-label inline-block mb-2 text-gray-700 font-medium"
                                                    >
                                                        Assignment Presentation
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#FF844B] focus:outline-none"
                                                        id="ap"
                                                        placeholder="Mark"
                                                        name="ap"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row justify-evenly w-full items-center sm:items-start">
                                                <button
                                                    className="sm:w-1/5 w-3/4 my-5 bg-slate-500 text-white font-bold p-2 rounded-full"
                                                    type="button"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    className="sm:w-1/4 w-3/4 sm my-5 bg-slate-500 text-white font-bold p-2 rounded-full"
                                                    type="button"
                                                    onClick={(e) =>
                                                        previousMarks(e)
                                                    }
                                                >
                                                    Previous Marks
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center w-full h-[91vh] mt-0.5">
                <div className="hidden flex-[0.2] mx-2 lg:flex px-2 ">
                    <div
                        className={`w-full flex flex-col items-center bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-lg px-2 h-[68vh] overflow-y-auto ${
                            courses.length > 7
                                ? "justify-start"
                                : "justify-evenly"
                        }`}
                    >
                        {courses.map((ele, index) => (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log(index);
                                    setOtherFalse(index);
                                }}
                                key={index}
                                className={`w-3/4 font-bold p-2 m-3 transition duration-300 rounded-lg ${
                                    ele.current
                                        ? " bg-slate-500 text-white"
                                        : " text-slate-500"
                                }`}
                            >
                                {ele.courseName}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="lg:hidden flex w-full ">
                    <Select />
                </div>
                <div className="flex-1 lg:flex-[0.8] h-[68vh] w-full flex flex-wrap flex-row justify-evenly items-center overflow-y-auto">
                    {data.map((item, index) => (
                        <div
                            className="w-48 h-1/3 m-3 shadow-lg rounded-lg bg-slate-100 flex flex-col gap-2 justify-evenly items-center hover:bg-slate-200 cursor-pointer"
                            key={index}
                            onClick={openModal}
                        >
                            <div className="font-bold text-slate-600 px-3 flex-[0.4] text-center text-lg flex flex-col gap-2 items-center">
                                <AcademicCapIcon className="h-14 w-14 text-[#FF844B]" />
                                <div>{item.name}</div>
                                <div>{item.rollNo}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Marks;
