"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    setTask("");
  };

  return (
    <div className="items-center mx-auto flex flex-col mt-20">
      <h1 className="text-center w-[40rem] text-[#f6f6f6] text-[2rem] font-bold bg-[#201f1f] px-2 py-2 rounded-lg shadow-lg">
        To Do List
      </h1>
      <div className="mt-7 w-[40rem]">
        <form onSubmit={submitHandler} className="flex justify-between">
          <input
            type="text"
            className="bg-[#f6f6f6] px-6 py-2 w-[83%] text-[1.rem] rounded-sm"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="text-xl bg-pink-900 text-[#f6f6f6] px-7 py-2 rounded-sm">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
