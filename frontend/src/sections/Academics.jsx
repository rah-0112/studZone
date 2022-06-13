import React, { useState } from "react";
import Table from "../components/Table";
import Select from "../components/Select";

const Academics = () => {
  const [sem, setSem] = useState([
    {
      sem: "1",
      current: true,
      table: <Table sem_no={1} />,
    },
    {
      sem: "2",
      current: false,
      table: <Table sem_no={2} />,
    },
    {
      sem: "3",
      current: false,
      table: <Table sem_no={3} />,
    },
    {
      sem: "4",
      current: false,
      table: <Table sem_no={4} />,
    },
    {
      sem: "5",
      current: false,
      table: <Table sem_no={5} />,
    },
    {
      sem: "6",
      current: false,
      table: <Table sem_no={6} />,
    },
    {
      sem: "7",
      current: false,
      table: <Table sem_no={7} />,
    },
    {
      sem: "8",
      current: false,
      table: <Table sem_no={8} />,
    },
  ]);

  const setOtherFalse = (index) => {
    setSem((vals) =>
      vals.map((val, idx) =>
        idx === index ? { ...val, current: true } : { ...val, current: false }
      )
    );
  };

  return (
    <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center w-full h-[91vh] mt-0.5">
      <div className="hidden flex-[0.2] mx-2 lg:flex">
        <div className="h-full w-full flex flex-col items-center">
          {sem.map((ele, index) => (
            <button
              key={index}
              className={`w-24 font-bold p-2 rounded-full m-3   transition duration-300 ${
                ele.current ? "bg-[#FF844B] text-slate-100" : "text-slate-600"
              }`}
              onClick={() => {
                setOtherFalse(index);
              }}
            >
              {`Sem ${index + 1}`}
            </button>
          ))}
        </div>
      </div>
      <div className="lg:hidden flex w-full ">
        <Select />
      </div>
      <div className="flex-1 lg:flex-[0.8] h-[68vh] w-full lg:w-[60vw]">
        {sem.map((item, idx) => item.current && item.table)}
      </div>
    </div>
  );
};

export default Academics;
