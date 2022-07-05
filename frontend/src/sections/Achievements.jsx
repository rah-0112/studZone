import { React, useState, useEffect } from "react";
import NoReccords from "../components/NoReccords";
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { PencilIcon } from "@heroicons/react/solid";
import { DownloadIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import axios from "axios";
import { StudzoneState } from "../Context";
import { AnimatePresence, motion } from "framer-motion";
import { API } from "../api";

const Achievements = () => {
    let [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [name, setName] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [ach_id, setAch_id] = useState("");

    const [data, setData] = useState([]);
    const { user } = StudzoneState();

    const toggle = () => {
        document.getElementById("slide2").classList.add("show");
        setTimeout(() => {
            document.getElementById("slide2").classList.remove("show");
        }, 3000);
    };

    useEffect(() => {
        const fn = async () => {
            var record = await axios.post(API + "/student/achievements", {
                rollno: user.id,
            });
            record = record.data.data;
            setData([]);
            record.map((eachpaper, idx) => {
                var rec = {
                    name: eachpaper.name,
                    date: eachpaper.date,
                    document: `Certificate-${idx}.pdf`,
                    link: eachpaper.img_link,
                    ach_id: eachpaper.ach_id,
                };
                setData((data) => [...data, rec]);
            });
        };
        fn();
    }, [isOpen]);

    const [q, setQ] = useState("");
    const [searchParam] = useState(["document", "name"]);

    const search = (items) => {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    };

    function closeModal(e) {
        setIsOpen(false);
        setName(null);
        setFile(null);
        e.preventDefault();
    }

    function openModal() {
        setIsOpen(true);
    }

    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/da2gjv9jw/image/upload",
                data
            );
            const { url } = uploadRes.data;
            const newAchievement = {
                name,
                img: url,
            };
            if (!isEdit) {
                await axios.post(API + "/student/addachievements", {
                    rollno: user.id,
                    name: newAchievement.name,
                    img_link: newAchievement.img,
                    date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
                });
            } else {
                await axios.post(API + "/student/updateachievements", {
                    rollno: user.id,
                    name: newAchievement.name,
                    img_link: newAchievement.img,
                    ach_id: ach_id,
                    date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
                });
                setIsEdit(false);
                toggle();
            }
        } catch (error) {
            console.log(error);
        }
        closeModal();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
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
                                <Dialog.Panel className="w-fit transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-bold leading-6 text-gray-900 pb-8"
                                    >
                                        Add Achievement
                                    </Dialog.Title>
                                    <form>
                                        <div className="flex flex-col gap-3 h-full w-full">
                                            <div className="flex flex-row gap-3 md:w-full h-full items-center wrap">
                                                <div className=" flex flex-col gap-2 w-full">
                                                    <label
                                                        htmlFor="name"
                                                        className="form-label inline-block mb-2 text-gray-700 font-medium"
                                                    >
                                                        Name Of Achievement
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="name"
                                                        placeholder="Name of achievement"
                                                        value={name}
                                                        onChange={(e) =>
                                                            setName(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 md:w-full h-full md:flex-row items-center">
                                                <div className="flex flex-row gap-3">
                                                    <div className=" flex flex-col gap-2">
                                                        <label
                                                            htmlFor="file"
                                                            className="form-label inline-block mb-2 text-gray-700 font-medium"
                                                        >
                                                            Achievement File
                                                        </label>
                                                        <input
                                                            type="file"
                                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                            id="file"
                                                            onChange={(e) =>
                                                                setFile(
                                                                    e.target
                                                                        .files[0]
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row justify-evenly w-full items-center sm:items-start">
                                                <button
                                                    className="sm:w-1/4 w-3/4 my-5 bg-slate-500 text-white font-bold p-2 rounded-full hover:bg-slate-600"
                                                    type="button"
                                                    onClick={handleCreate}
                                                >
                                                    Add
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
            <div>
                {data.length !== 0 ? (
                    <div className="flex flex-col gap-5 px-7 pt-20 sm:h-[91.4vh] pb-16 h-full items-center sm:items-stretch">
                        <div className="flex sm:flex-row sm:justify-between items-center flex-col sm:gap-0 gap-8">
                            <button
                                className="w-fit bg-[#FF844B] font-semibold text-white py-2 px-4 rounded-full hover:bg-[#e3723d] flex items-center justify-center flex-row"
                                onClick={openModal}
                            >
                                Add achievement{" "}
                                <PlusCircleIcon
                                    height={20}
                                    width={20}
                                    className="m-1"
                                />
                            </button>
                            <div>
                                <label
                                    htmlFor="default-search"
                                    class="mb-2 text-sm font-medium text-gray-900 sr-only"
                                >
                                    Search
                                </label>
                                <div class="relative">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg
                                            class="w-5 h-5 text-slate-100"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        class="block p-3 pl-10 w-[85vw] sm:w-72 text-sm text-slate-100 bg-slate-500 rounded-full border border-gray-300 placeholder:text-slate-100 font-semibold outline-none "
                                        placeholder="Search achievements"
                                        required
                                        value={q}
                                        onChange={(e) => setQ(e.target.value)}
                                    />
                                    <span className="sr-only">
                                        Search achievements here
                                    </span>
                                    <button
                                        type="button"
                                        class="text-white absolute right-2.5 bottom-2.5 bg-[#FF844B] hover:bg-[#e3723d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-1"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-72 flex-1 flex h-full flex-col mt-5 p-1 pr-2 sm:overflow-auto sm:w-full">
                            <AnimatePresence>
                                {search(data).map((item, index) => (
                                    <motion.div
                                        className="w-full my-3 py-2 shadow-lg rounded-lg bg-slate-100 flex flex-col gap-2 sm:flex-row justify-around items-center"
                                        key={index}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="font-bold text-slate-600 px-3 flex-[0.4] text-center text-lg">
                                            {item.name}
                                        </div>
                                        <div className="font-bold text-slate-600 px-3 flex-[0.2]">
                                            {item.date
                                                .slice(0, 10)
                                                .replace(/-/g, "/")}
                                        </div>
                                        <a
                                            className="font-bold text-slate-600 px-3 flex-[0.2] underline cursor-pointer"
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.document}
                                        </a>
                                        <div className="flex flex-row gap-10 sm:gap-5 ">
                                            <div className="rounded-full flex items-center justify-center duration-300 text-slate-500 flex-[0.1]">
                                                <button>
                                                    <PencilIcon
                                                        className="h-6 w-6 hover:text-slate-700"
                                                        onClick={(e) => {
                                                            setName(item.name);
                                                            setAch_id(
                                                                item.ach_id
                                                            );
                                                            setIsEdit(true);
                                                            openModal();
                                                        }}
                                                    />
                                                </button>
                                            </div>
                                            <button className="rounded-full flex items-center justify-center duration-300 p-1 text-slate-500 flex-[0.1] hover:text-slate-700">
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <DownloadIcon className="h-6 w-6" />
                                                </a>
                                            </button>
                                        </div>
                                        <div
                                            id="slide2"
                                            className="flex flex-row gap-2"
                                        >
                                            <CheckCircleIcon className="w-6 h-6" />
                                            <div className="tracking-wider">
                                                {"Edited Successfully!"}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                ) : (
                    <div className="py-10">
                        <NoReccords heading="Achievements" />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Achievements;
