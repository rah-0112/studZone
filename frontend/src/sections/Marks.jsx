import React, { useEffect, useState } from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import axios from "axios";
import { StudzoneState } from "../Context";

const Marks = () => {
    let [isOpen, setIsOpen] = useState(false);
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [currentCourse, setCurrentCourse] = useState({});
    const [currentStudent, setCurrentStudent] = useState({});
    const { user } = StudzoneState();

    const fetchCourses = async () => {
        var { data } = await axios.post("http://localhost:5000/staff/courses", {
            id: user.id,
        });
        data = data.map((val, index) =>
            index ? { ...val, index: index } : { ...val, index: index }
        );
        setCourses(data);
    };

    const fetchStudentsPerCourse = async () => {
        const { data } = await axios.post(
            "http://localhost:5000/staff/students",
            { id: user.id, paper_name: currentCourse }
        );
        setStudents(data);
    };

    const uploadMarks = async () => {
        await axios.post("http://localhost:5000/staff/uploadMarks", {
            ...form,
            sem_no: 4,
            staff_id: user.id,
            stu_id: currentStudent.id,
            paper_name: currentCourse,
        });
        closeModal();
    };

    const fetchMarks = async () => {
        const { data } = await axios.post(
            "http://localhost:5000/staff/fetchMarks",
            {
                staff_id: user.id,
                stu_id: currentStudent.id,
                paper_name: currentCourse,
                sem_no: 4,
            }
        );
        setForm(data);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const [form, setForm] = useState({
        ca1: 0,
        ca2: 0,
        ca3: 0,
        tut: 0,
        ap: 0,
        sem: 0,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    function closeModal() {
        setIsOpen(false);
        setForm({
            ca1: 0,
            ca2: 0,
            ca3: 0,
            tut: 0,
            ap: 0,
            sem: 0,
        });
    }
    function openModal() {
        setIsOpen(true);
    }

    const setOtherFalse = (index) => {
        setCourses((vals) =>
            vals.map((val, idx) => {
                if (idx === index) {
                    setCurrentCourse(val.paper_name);
                    return { ...val, current: true };
                } else {
                    return { ...val, current: false };
                }
            })
        );
    };

    useEffect(() => {
        fetchStudentsPerCourse();
    }, [currentCourse]);

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
                                                        value={form.ca1}
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
                                                        value={form.ca2}
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
                                                        value={form.ca3}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 md:w-full h-full md:flex-row items-center">
                                                <div className="flex flex-row gap-3">
                                                    <div className=" flex flex-col gap-2">
                                                        <label
                                                            for="tut"
                                                            class="form-label inline-block mb-2 text-gray-700 font-medium"
                                                        >
                                                            Tutorial
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#FF844B] focus:outline-none"
                                                            id="tut"
                                                            placeholder="Mark"
                                                            name="tut"
                                                            value={form.tut}
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                    <div className=" flex flex-col gap-2">
                                                        <label
                                                            for="sem"
                                                            class="form-label inline-block mb-2 text-gray-700 font-medium"
                                                        >
                                                            Semester
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#FF844B] focus:outline-none"
                                                            id="sem"
                                                            placeholder="Mark"
                                                            name="sem"
                                                            value={form.sem}
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
                                                        value={form.ap}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row justify-evenly w-full items-center sm:items-start">
                                                <button
                                                    className="sm:w-1/5 w-3/4 my-5 bg-slate-500 text-white font-bold p-2 rounded-full"
                                                    type="button"
                                                    onClick={uploadMarks}
                                                >
                                                    Update
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
            <div className="flex  flex-col items-center lg:justify-start justify-center w-full lg:h-[91vh] h-full mt-0.5 pt-20 gap-10 lg:gap-0 lg:pt-0 ">
                <div
                    className="py-10 font-bold text-slate-500 underline
                "
                >
                    {"CURRENT SEMESTER : 4"}
                </div>
                <div className="flex-col flex lg:flex-row">
                    <div className="w-full flex-[0.2] mx-2 lg:flex px-2 ">
                        <div
                            className={`w-full  flex flex-col items-center bg-slate-100 rounded-xl lg:bg-opacity-30 backdrop-filter backdrop-blur-lg px-2 lg:h-[68vh] overflow-y-auto ${
                                courses.length > 6
                                    ? "justify-start"
                                    : "justify-evenly"
                            }`}
                        >
                            {courses.map((ele, index) => (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentCourse(ele);
                                        setOtherFalse(index);
                                    }}
                                    key={index}
                                    className={`w-3/4 font-bold h-fit p-2 m-3 transition duration-300 rounded-lg ${
                                        ele.current
                                            ? " bg-slate-500 text-white"
                                            : " text-slate-500 bg-slate-100 bg-opacity-70"
                                    }`}
                                >
                                    {ele.paper_name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 lg:flex-[0.8] h-[68vh] w-full flex flex-wrap flex-row justify-evenly items-center overflow-y-auto">
                        {students.map((item, index) => (
                            <div
                                className="w-48 h-1/3 m-3 shadow-lg rounded-lg bg-slate-100 flex flex-col gap-2 justify-evenly items-center hover:bg-slate-200 cursor-pointer"
                                key={index}
                                onClick={() => {
                                    openModal();
                                    fetchMarks();
                                    setCurrentStudent(item);
                                }}
                            >
                                <div className="font-bold text-slate-600 px-3 flex-[0.4] text-center text-lg flex flex-col gap-2 items-center">
                                    <AcademicCapIcon className="h-14 w-14 text-[#FF844B]" />
                                    <div>{item.name}</div>
                                    <div>{item.id}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Marks;
