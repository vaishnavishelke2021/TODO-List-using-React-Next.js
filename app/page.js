"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task }]);
    console.log(mainTask);
    setTask("");
  };

  let renderTask = (
    <h1 className="w-full py-2 text-[0.94rem] text-[#f9f9f956] bg-[#201f1f92] text-center border-b-[1px] border-[#f9f9f916] rounded-sm">
      No task added
    </h1>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t) => {
      return (
        <div className=" w-full bg-[#201f1f92] py-1 mt-2 flex align-middle items-center justify-between px-3 border-b-[1px] border-[#f9f9f916]">
          <h1
            key={task}
            className=" text-[1rem] text-[#f9f9f9e7]  text-center rounded-sm"
          >
            {t.task}
          </h1>

          <div className="flex space-x-4">
            <button className=" text-green-500 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </button>
            <button className=" text-red-500 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="items-center mx-auto flex flex-col mt-20">
      <h1 className="text-center w-[30rem] text-[#f6f6f6] text-[1.9rem] font-bold px-2 py-1 rounded-lg shadow-lg">
        To Do List
      </h1>
      <div className="mt-14 w-[34rem]">
        <form onSubmit={submitHandler} className="flex justify-between">
          <input
            type="text"
            className="bg-[#f6f6f6] px-6 py-1 w-[81%] text-[1rem] rounded-sm"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button className="text-[1.1rem] bg-[#c05532] text-[#f6f6f6] px-7 py-1 rounded-sm">
            Add
          </button>
        </form>

        <ul className="mt-5">
          <li>{renderTask}</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
