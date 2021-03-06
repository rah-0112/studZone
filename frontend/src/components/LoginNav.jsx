import React from "react";
import { ReactComponent as Logo1 } from "../assets/Studzone1.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { StudzoneState } from "../Context";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const LoginNav = () => {
    const { setUser } = StudzoneState();
    const navigate = useNavigate();
    const signOut = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <div className="profileBG -z-1">
            <header className="flex flex-row pt-5 pl-7 pr-7 md:pl-20 md:pr-20 lg:pl-32 lg:pr-32 items-center pb-5 justify-between">
                <Logo1 />
                <div className="flex flex-row gap-2 text-lg">
                    <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative">
                            <div>
                                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://xsgames.co/randomusers/avatar.php?g=male"
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
                                                    active ? "bg-gray-100" : "",
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
                                                    active ? "bg-gray-100" : "",
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
            </header>
        </div>
    );
};

export default LoginNav;
