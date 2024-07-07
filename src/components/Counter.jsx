import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className=" flex h-fit md:h-[350px]  bg-[#F5F7FA] justify-center flex-col md:flex-row dark:bg-inherit px-20 ">
      <div className="flex flex-col  md:w-[50%] justify-center items-center gap-3 md:gap-6">
        <p className="md:text-left  p-2 text-center text-2xl md:text-4xl font-semibold  w-[70%]  flex flex-col ">
          Helping a local
          <span className="text-2xl md:text-4xl text-green-600">
            {" "}
            business reinvent itself
          </span>
        </p>

        <p className="md:text-left w-[70%] text-center mb-5">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="flex items-center  w-full md:w-[50%] ">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-fit md:h-[200px] items-center justify-start gap-5">
          <div class="grid grid-cols-2 items-center  gap-1">
            <div class="row-span-2 justify-self-center">
              <img src="./images/help1.png" alt="" className="h-[50px]" />
            </div>

            <div class="text-xl md:text-3xl font-bold">
              <CountUp start={0} end={2245341} duration={15} />
            </div>

            <div class="text-sm md:text-lg">Members</div>
          </div>
          <div class="grid grid-cols-2 items-center">
            <div class="row-span-2 justify-self-center">
              <img src="./images/help2.png" alt="" className="h-[50px]" />
            </div>

            <div class="text-xl md:text-3xl font-bold">
              <CountUp start={0} end={46328} duration={15} />{" "}
            </div>

            <div class="text-sm md:text-lg">Clubs</div>
          </div>
          <div class="grid grid-cols-2 items-center">
            <div class="row-span-2 justify-self-center">
              <img src="./images/help3.png" alt="" className="h-[50px]" />
            </div>

            <div class="text-xl md:text-3xl font-bold">
              <CountUp start={0} end={828867} duration={15} />
            </div>

            <div class="text-sm md:text-lg">Event Bookings</div>
          </div>
          <div class="grid grid-cols-2 items-center">
            <div class="row-span-2 justify-self-center">
              <img src="./images/help4.png" alt="" className="h-[50px]" />
            </div>

            <div class="text-xl md:text-3xl font-bold">
              {" "}
              <CountUp start={0} end={1926436} duration={15} />
            </div>

            <div class="text-sm md:text-lg">Payments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
