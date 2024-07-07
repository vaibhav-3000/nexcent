"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Carousal = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <div className=" flex w-screen flex-col-reverse md:flex-row h-fit md:h-[600px] gap-3 p-10 ">
          <div className="flex flex-col  md:w-[60%] justify-center  items-end md:pl-[100px] gap-3 md:gap-6">
            <p className="text-3xl md:text-6xl font-semibold text-left w-full md:w-[80%] ">
              Lessons and insignts{" "}
              <span className="text-3xl md:text-6xl text-green-600">
                {" "}
                from 8 years
              </span>
            </p>

            <p className="text-left w-full md:w-[80%] ">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="text-left w-full md:w-[80%] ">
              <Button asChild className="bg-green-600 hover:bg-green-500 px-6">
                <Link href="/login">Register</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center">
            <img src="./lesson.svg" />
          </div>
        </div>
      </div>
      <div>
        <div className=" flex w-screen flex-col-reverse md:flex-row h-fit md:h-[600px] gap-3 p-10 ">
          <div className="flex flex-col  md:w-[60%] justify-center  items-end md:pl-[100px] gap-3 md:gap-6">
            <p className="text-3xl md:text-6xl font-semibold text-left w-full md:w-[80%] ">
              Lessons and insignts{" "}
              <span className="text-3xl md:text-6xl text-green-600">
                {" "}
                from 8 years
              </span>
            </p>

            <p className="text-left w-full md:w-[80%] ">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="text-left w-full md:w-[80%] ">
              <Button asChild className="bg-green-600 hover:bg-green-500 px-6">
                <Link href="/login">Register</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center">
            <img src="./lesson.svg" />
          </div>
        </div>
      </div>
      <div>
        <div className=" flex w-screen flex-col-reverse md:flex-row h-fit md:h-[600px] gap-3 p-10 ">
          <div className="flex flex-col  md:w-[60%] justify-center  items-end md:pl-[100px] gap-3 md:gap-6">
            <p className="text-3xl md:text-6xl font-semibold text-left w-full md:w-[80%] ">
              Lessons and insignts{" "}
              <span className="text-3xl md:text-6xl text-green-600">
                {" "}
                from 8 years
              </span>
            </p>

            <p className="text-left w-full md:w-[80%] ">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="text-left w-full md:w-[80%] ">
              <Button asChild className="bg-green-600 hover:bg-green-500 px-6">
                <Link href="/login">Register</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center">
            <img src="./lesson.svg" />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Carousal;
