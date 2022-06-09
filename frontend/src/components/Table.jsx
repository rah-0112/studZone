import React, { useState } from "react";
import { motion } from "framer-motion";
import { Reorder } from "framer-motion";

const Table = () => {
    const [data, setData] = useState([
        {
            courseName: "Choloepus hoffmani",
            ca1: 20,
            ca2: 18,
            ca3: 26,
            b2: 15,
            tut1: 18,
            tut2: 30,
            ap: 28,
            total: 25,
        },
        {
            courseName: "Cygnus buccinator",
            ca1: 17,
            ca2: 15,
            ca3: 21,
            b2: 21,
            tut1: 27,
            tut2: 28,
            ap: 16,
            total: 29,
        },
        {
            courseName: "Merops bullockoides",
            ca1: 23,
            ca2: 19,
            ca3: 17,
            b2: 19,
            tut1: 30,
            tut2: 20,
            ap: 23,
            total: 27,
        },
        {
            courseName: "Laniaurius atrococcineus",
            ca1: 29,
            ca2: 25,
            ca3: 16,
            b2: 25,
            tut1: 21,
            tut2: 29,
            ap: 28,
            total: 25,
        },
        {
            courseName: "Butorides striatus",
            ca1: 28,
            ca2: 18,
            ca3: 23,
            b2: 30,
            tut1: 19,
            tut2: 28,
            ap: 24,
            total: 15,
        },
        {
            courseName: "Grus rubicundus",
            ca1: 15,
            ca2: 24,
            ca3: 16,
            b2: 17,
            tut1: 16,
            tut2: 22,
            ap: 27,
            total: 26,
        },
        {
            courseName: "Panthera leo",
            ca1: 16,
            ca2: 23,
            ca3: 17,
            b2: 23,
            tut1: 17,
            tut2: 24,
            ap: 22,
            total: 21,
        },
        {
            courseName: "Columba palumbus",
            ca1: 17,
            ca2: 30,
            ca3: 15,
            b2: 22,
            tut1: 22,
            tut2: 22,
            ap: 19,
            total: 22,
        },
        {
            courseName: "Nectarinia chalybea",
            ca1: 28,
            ca2: 29,
            ca3: 26,
            b2: 22,
            tut1: 25,
            tut2: 25,
            ap: 27,
            total: 28,
        },
        {
            courseName: "Lutra canadensis",
            ca1: 30,
            ca2: 15,
            ca3: 29,
            b2: 26,
            tut1: 18,
            tut2: 27,
            ap: 30,
            total: 19,
        },
    ]);

    return (
        <div className="flex flex-col max-w-7xl h-[68vh] ">
            <div className="overflow-x-auto">
                <div>
                    <div className="overflow-x-auto overflow-y-auto rounded-md ">
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
                                            Best of 2
                                        </th>
                                        <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                            Tutorial - 1
                                        </th>
                                        <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                            Tutorial - 2
                                        </th>
                                        <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                            Presentation
                                        </th>
                                        <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <Reorder.Item
                                            as="tr"
                                            key={row.total}
                                            value={row.total}
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
                                                    {row.b2}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                                                <p className="text-gray-600 whitespace-no-wrap">
                                                    {row.tut1}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                                                <p className="text-gray-600 whitespace-no-wrap">
                                                    {row.tut2}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                                                <p className="text-gray-600 whitespace-no-wrap">
                                                    {row.ap}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                                                <p className="text-gray-600 whitespace-no-wrap">
                                                    {row.total}
                                                </p>
                                            </td>
                                        </Reorder.Item>
                                    ))}
                                </tbody>
                            </table>
                        </Reorder.Group>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
