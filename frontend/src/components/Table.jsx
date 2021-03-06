import React, { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import axios from "axios";
import { StudzoneState } from "../Context";
import NoTable from "./NoTable";
import { motion } from "framer-motion";
import { API } from "../api";

const Table = ({ sem_no }) => {
    const [data, setData] = useState([]);
    const { user } = StudzoneState();

    useEffect(() => {
        const fn = async () => {
            var record = await axios.post(API + "/student/academics", {
                rollno: user.id,
                sem_no: sem_no,
            });
            record = record.data.data.rows;
            setData([]);
            record.map((eachpaper) => {
                var rec = {
                    courseName: eachpaper.paper_name,
                    ca1: eachpaper.ca1,
                    ca2: eachpaper.ca2,
                    ca3: eachpaper.ca3,
                    tut: eachpaper.tutorial,
                    assign: eachpaper.assignment,
                    sem: eachpaper.sem_mark,
                };
                setData((data) => [...data, rec]);
            });
        };
        fn();
    }, []);

    return (
        <motion.div
            className="flex flex-col max-w-7xl h-[68vh] bg-slate-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="overflow-x-auto">
                <div>
                    <div className="overflow-x-auto overflow-y-auto rounded-md ">
                        {data.length > 0 ? (
                            <Reorder.Group values={data} onReorder={setData}>
                                <table className="min-w-full leading-normal rounded-md">
                                    <thead className="bg-slate-500">
                                        <tr>
                                            <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                                Course Title
                                            </th>
                                            <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                                CA - 1
                                            </th>
                                            <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                                CA - 2
                                            </th>
                                            <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                                CA - 3
                                            </th>
                                            <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                                Tutorial
                                            </th>
                                            <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                                Assignment
                                            </th>
                                            <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                                Semester
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.map((row, index) => (
                                            <Reorder.Item
                                                as="tr"
                                                key={row.sem}
                                                value={row.sem}
                                                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 font-bold"
                                            >
                                                <td className="px-5 py-5  border-gray-200 border-2 text-sm text-center">
                                                    <p className="text-gray-600 whitespace-no-wrap uppercase">
                                                        {row.courseName}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                                                    <p className="text-gray-600 whitespace-no-wrap">
                                                        {row.ca1}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                                                    <p className="text-gray-600 whitespace-no-wrap">
                                                        {row.ca2}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                                                    <p className="text-gray-600 whitespace-no-wrap">
                                                        {row.ca3}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                                                    <p className="text-gray-600 whitespace-no-wrap">
                                                        {row.tut}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                                                    <p className="text-gray-600 whitespace-no-wrap">
                                                        {row.assign}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                                                    <p className="text-gray-600 whitespace-no-wrap">
                                                        {row.sem}
                                                    </p>
                                                </td>
                                            </Reorder.Item>
                                        ))}
                                    </tbody>
                                </table>
                            </Reorder.Group>
                        ) : (
                            <NoTable />
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Table;
