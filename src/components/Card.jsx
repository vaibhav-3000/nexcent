"use client";
import React from "react";

const Card = ({ img, text }) => {
  return (
    <div className="h-[400px]">
      <img src={img} alt="" className="h-[250px] w-[350px] rounded-xl" />
      <div className="bg-[#F5F7FA] w-[320px] m-auto text-xl p-4 rounded-xl relative bottom-20 dark:bg-slate-900  ">
        <p className="font-semibold text-[#717171] text-center dark:text-white ">
          {text}
        </p>
        <div className="flex text-xl font-bold gap-2 items-center hover:cursor-pointer">
          <p className="text-green-600 m-auto flex items-center">
            Read More
            <svg
              width="40"
              height="45"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                stroke="#4CAF4F"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
