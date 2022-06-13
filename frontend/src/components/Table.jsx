import React, { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import axios from "axios";

const Table = ({ sem_no }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fn = async () => {
      var record = await axios.post("http://localhost:5000/student/academics", {
        rollno: "19Z205",
        sem_no: sem_no,
      });
      console.log(record);
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
    <div className="flex flex-col max-w-7xl h-[68vh] bg-slate-100">
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
                      Tutorial
                    </th>
                    <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                      Assignment
                    </th>
                    <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                      Semester
                    </th>
                    {/* <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                      Presentation
                    </th>
                    <th className="px-3 py-4 border-b-2 border-gray-20 text-center text-sm font-semibold text-white uppercase tracking-wider">
                      Total
                    </th> */}
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
                      {/* <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {row.ap}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 border-2 text-sm text-center">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {row.total}
                        </p>
                      </td> */}
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
