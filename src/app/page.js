"use client";
import Card from "@/components/Card";
import Carousal from "@/components/carousal";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "next-themes";
import Link from "next/link";

export default function Component() {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Carousal />
      <section className="flex dark:bg-black flex-col items-center justify-center gap-5 mt-5 text-[#4D4D4D] dark:text-gray-300 dark:bg-inherit">
        <p className="text-3xl font-semibold">Our Clients</p>
        <p className="text-center">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex justify-evenly w-full py-4">
          <img src="./images/client1.svg" />
          <img src="./images/client2.svg" />
          <img src="./images/client3.svg" />
          <img src="./images/client4.svg" />
          <img src="./images/client5.svg" />
          <img src="./images/client6.svg" />
          <img src="./images/client3.svg" />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-2 md:gap-5 mt-7 text-[#4D4D4D] dark:text-gray-300">
        <p className="text-xl p-2 md:text-3xl font-semibold md:w-[30%] text-center">
          Manage your entire community in a single system
        </p>
        <p>Who is Nextcent suitable for?</p>
        <div className="flex flex-col md:flex-row justify-center w-full py-4 gap-10 md:gap-0">
          <div className="flex flex-col items-center  gap-5 md:w-[30%] justify-center">
            <img src="./images/manage1.svg" />
            <p className="text-3xl font-semibold px-10 md:px-0 md:w-[50%] text-center">
              Membership Organizations
            </p>
            <p className="md:w-[60%] px-10 md:px-0 text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 md:w-[25%] justify-center">
            <img src="./images/manage2.svg" />
            <p className="text-3xl font-semibold px-10  md:px-0 md:w-[50%] text-center">
              National Associations
            </p>
            <p className="md:w-[60%] px-10 md:px-0 text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col items-center  gap-5 md:w-[30%] justify-center">
            <img src="./images/manage3.svg" />
            <p className="text-3xl font-semibold px-10  md:px-0 md:w-[50%] text-center">
              Clubs And Groups
            </p>
            <p className="md:w-[60%] px-10   md:px-0 text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center flex-col md:flex-row gap-[100px] m-10 p-10">
        <img src="./images/password.svg" />
        <div className="flex flex-col w-[100%] md:w-[50%] justify-center gap-6">
          <p className="text-2xl md:text-4xl font-semibold text-left   md:w-[80%]">
            The unseen of spending three years at Pixelgrade
          </p>

          <p className="md:text-left md:w-[80%] text-justify text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div className="md:text-left md:w-[80%]  text-center">
            <Button asChild className="bg-green-600 hover:bg-green-500 px-6">
              <Link href="/login">Register</Link>
            </Button>
          </div>
        </div>
      </section>
      <Counter />
      <section className="flex justify-center flex-col md:flex-row gap-[100px] m-10 p-10">
        <img src="./images/signup.svg" />
        <div className="flex flex-col w-[100%] md:w-[50%] justify-center gap-6">
          <p className=" text-2xl md:text-4xl font-semibold text-left   md:w-[80%] ">
            How to design your site footer like we did
          </p>

          <p className="md:text-left md:w-[80%] text-justify text-sm ">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <div className="md:text-left md:w-[80%]  text-center">
            <Button asChild className="bg-green-600 hover:bg-green-500 px-6">
              <Link href="/login">Register</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center gap-[100px] items-center flex-col md:flex-row p-10 bg-[#F5F7FA] w-full dark:bg-inherit ">
        <img
          src="./images/T.jpg"
          className="h-[300px] w-[300px] object-cover rounded-xl "
        />
        <div className="flex flex-col w-[90%] md:w-[65%] gap-6 justify-between">
          <p className=" w-[90%] mx-auto text-justify text-[16px]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="w-[90%] mx-auto">
            <p className="text-green-600 text-lg">Tim Smith</p>
            <p className="text-[#89939E]">
              British Dragon Boat Racing Association
            </p>
          </div>
          <div className="flex  gap-10 w-[90%] flex-wrap mx-auto items-center justify-between">
            <img src="./images/client1-alt.svg" style={{ color: "red" }} />
            <img src="./images/client2.svg" />
            <img src="./images/client3.svg" />
            <img src="./images/client4.svg" />
            <img src="./images/client5.svg" />
            <img src="./images/client6.svg" />
            <div className="flex text-2xl gap-2 items-center hover:cursor-pointer">
              <p className="text-green-600">Meet all customers</p>
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
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center  justify-center gap-5 mt-10 p-5 md:p-0 text-[#4D4D4D] dark:text-gray-300">
        <p className="text-3xl font-semibold text-center">
          Caring is the new marketing
        </p>
        <p className=" w-full md:w-[40%] text-justify md:text-center">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
        <div className="flex justify-center gap-5 flex-col md:flex-row">
          {" "}
          <Card
            img={"./images/card1.jpg"}
            text={"Creating Streamlined Safeguarding Processes with OneRen"}
          />
          <Card
            img={"./images/card2.jpg"}
            text={
              "What are your safeguarding responsibilities and how can you manage them?"
            }
          />
          <Card
            img={"./images/card3.jpg"}
            text={"Revamping the Membership Model with Triathlon Australia"}
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-6 bg-[#F5F7FA] dark:bg-inherit mb-5">
        <p className="  md:text-[50px] font-bold w-full  md:w-[40%] text-center">
          Pellentesque suscipit fringilla libero eu.
        </p>
        <Button
          asChild
          className="bg-green-600 hover:bg-green-500 px-18px py-6"
        >
          <Link href="/login">
            {" "}
            <p className=" flex items-center gap-2 dark:text-white">
              Get a Demo
              <svg
                width="20"
                height="25"
                viewBox="0 0 24 25"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </p>
          </Link>
        </Button>
      </section>
      <Footer />
    </ThemeProvider>
  );
}
