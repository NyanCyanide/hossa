import React from "react";
import call from "../assets/call.png";
import email from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export default function links() {
  return (
    <>
      <div className="select-none">
        <div className="my-6 mx-1 md:mx-0 grid grid-flow-row md:grid-flow-col gap-2 md:gap-6">
          <a
            className="justify-start duration-500 hover:scale-105  rounded-lg flex flex-row items-center hover:bg-rose-700 bg-rose-600 px-2 py-1"
            href="callto:+919902106941"
          >
            <div className="w-2/12">
              <img className="scale-75" src={call} alt="" />
            </div>
            <div className="w-10/12 text-white text-xl">
              <p className="px-2 font-semibold">Contact</p>
            </div>
          </a>
          <a
            className="justify-start rounded-lg duration-500 flex flex-row items-center hover:scale-105 hover:bg-yellow-400 bg-yellow-500 px-2 py-1"
            href="mailto:hariomswarupsa@gmail.com"
          >
            <div className="w-2/12">
              <img src={email} alt="" />
            </div>
            <div className="w-8/12 text-white text-xl">
              <p className="px-2 font-semibold">Email</p>
            </div>
            <div className="w-2/12 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </div>
          </a>
          <a
            className="justify-start rounded-lg duration-500 flex flex-row hover:scale-105 hover:bg-sky-700 items-center bg-sky-800 px-2 py-1"
            href="https://www.linkedin.com/in/hariomswarupsa/"
          >
            <div className="w-2/12">
              <img className="scale-90" src={linkedin} alt="" />
            </div>
            <div className="w-8/12 text-white text-xl">
              <p className="px-2 font-semibold">LinkedIn</p>
            </div>
            <div className="w-2/12 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </div>
          </a>
          <a
            className="justify-start rounded-lg duration-500 flex  flex-row items-center hover:bg-slate-700 hover:scale-105 bg-slate-800 px-2 py-1"
            href="https://github.com/NyanCyanide"
          >
            <div className="w-2/12">
              <img className="scale-90" src={github} alt="" />
            </div>
            <div className="w-8/12 text-white text-xl">
              <p className="px-2 font-semibold">Github</p>
            </div>
            <div className="w-2/12 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
