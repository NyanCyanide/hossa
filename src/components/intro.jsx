import React from "react";
import profilepicture from "../assets/swarupsa.jpg";

export default function intro() {
  return (
    <>
      <div className="flex dark:text-white dark:bg-secondary md:flex-row flex-col mt-8">
        <div className="md:w-1/6">
          <div className="mx-8 md:mx-0 hover:-rotate-6 duration-1000">
            <img
              src={profilepicture}
              className=" rounded-full shadow-md shadow-black"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-5/6 md:pl-16 flex flex-col justify-center space-y-1 ">
          <p className="md:text-left md:text-6xl text-4xl font-serif mt-4  text-center">
            Hari Om Swarup S A
          </p>
          <p className="text-center md:text-left  font-bold">
            | Full Stack Developer | UI/UX Designer | Software Developer | Game Developer |
          </p>
          <hr className="border-t-2 border-slate-400"/>
          <p className="text-center md:text-justify">
            Hey there! Welcome to my portfolio website, I am student <a className="text-blue-600 font-bold" href="https://pes.edu/">@PES Univeristy</a> pursuing my B.Tech in Computer Science and Engineering. I have a passion for coding, gaming, and mathematics. Please feel free to roam around my website and do check my amazing projects at <a className="font-bold" href="https://github.com/NyanCyanide">Github</a>.
          </p>
        </div>
      </div>
    </>
  );
}
