import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ReactComponent as Logo } from "../assets/Studzone1.svg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Academics from "../sections/Academics";
import Achievements from "../sections/Achievements";
import Arrear from "../sections/Arrear";
import Fee from "../sections/Fee";
import { StudzoneState } from "../Context";

const navigation = [
    {
        name: "Academics",
        href: "#1",
        current: false,
        component: <Academics />,
    },
    {
        name: "Achievements",
        href: "#2",
        current: false,
        component: <Achievements />,
    },
    {
        name: "Arrear",
        href: "#3",
        current: false,
        component: <Arrear />,
    },
    {
        name: "Fee",
        href: "#4",
        current: false,
        component: <Fee />,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Details = () => {
    const [openTab, setOpenTab] = React.useState(-1);
    const navigate = useNavigate();
    const { setUser } = StudzoneState();
    const setOtherFalse = (href) => {
        navigation.map((item) => {
            if (href !== item.href) {
                item.current = false;
            }
        });
    };

    const signOut = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <motion.div
            className="bg-gradient-to-t from-slate-500 to-[#fafafa] w-full h-full duration-300"
            exit={{ opacity: 0 }}
        >
            <Disclosure as="nav">
                {({ open, close }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 ">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <MenuIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link to="/">
                                            <Logo />
                                        </Link>
                                    </div>
                                    <div className="hidden sm:block sm:ml-10  md:ml-16 lg:ml-24">
                                        <ul
                                            className="flex space-x-4  md:space-x-6 lg:space-x-16"
                                            role="tablist"
                                        >
                                            {navigation.map((item, index) => (
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setOpenTab(index);
                                                        item.current = true;
                                                        setOtherFalse(
                                                            item.href
                                                        );
                                                    }}
                                                    data-toggle="tab"
                                                    role="tablist"
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-slate-600 text-white"
                                                            : "text-slate-600 hover:bg-slate-600 hover:text-white",
                                                        "px-3 py-2 rounded-md text-sm lg:text-md font-medium duration-200 font-pop tracking-wide"
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/profile"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Your Profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                            onClick={signOut}
                                                        >
                                                            Sign out
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel className="sm:hidden bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-b-2xl">
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item, index) => (
                                        <Disclosure.Button
                                            as="a"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(index);
                                                close();
                                            }}
                                            data-toggle="tab"
                                            role="tablist"
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-slate-600 text-white"
                                                    : "text-slate-600 hover:bg-slate-600 hover:text-white",
                                                "block px-3 py-2 rounded-md text-sm font-medium"
                                            )}
                                            aria-current={
                                                item.current
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
            {openTab === -1 ? (
                <div className="w-full grid place-items-center h-[91vh] pl-7 pr-7 mt-0.5 md:pl-20 md:pr-20 lg:pl-32 lg:pr-32  font-pop text-2xl font-bold tracking-wider leading-loose text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-900 text-center justify-center">
                    <div className="w-full md:w-2/3">
                        Fees should be paid before due date
                        <em className="px-1 text-[#d06838] font-serif text-4xl">
                            ,
                        </em>
                        Leave should be applied beforehand or else serious
                        actions would be taken
                        <em className="px-1 text-[#d06838] font-serif text-4xl">
                            .
                        </em>
                    </div>
                </div>
            ) : (
                <div className="tab-content tab-space h-full">
                    {navigation.map((item, index) => (
                        <div
                            className={
                                openTab === index
                                    ? "block w-full pl-7 pr-7 md:pl-20 md:pr-20 lg:pl-32 lg:pr-32 h-full"
                                    : "hidden"
                            }
                            id={item.href}
                            key={item.name}
                        >
                            {item.component}
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default Details;
