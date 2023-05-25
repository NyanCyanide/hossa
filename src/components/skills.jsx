import React from "react";

const skillsdata = [
  {
    name: "Python",
    percent: 95,
  },
  {
    name: "ReactJS",
    percent: 90,
  },
  {
    name: "UI/UX",
    percent: 85,
  },
  {
    name: "C/C++",
    percent: 90,
  },
  {
    name: "Figma",
    percent: 95,
  },
  {
    name: "Bash",
    percent: 80,
  },
  {
    name: "Flutter",
    percent: 60,
  },
  {
    name: "JavaScript",
    percent: 75,
  },

]

export default function skills() {
  return (
    <>
      <div className="my-4 md:mb-2 md:mt-0">
        <p className="dark:text-white text-5xl">Skills</p>
        <div className="grid grid-flow-cols mt-4 grid-cols-2 gap-y-3 gap-x-10 md:gap-x-20 md:mr-20">
          {
            skillsdata.map((skill, index) => {
              return (
                <>
                <div key={index} className="">
                  <p className="my-1 dark:text-white">{skill.name}</p>
                  <div className="bg-gray-300 duration-1000 shadow-md shadow-gray-400 rounded-lg">
                    <div style={{width : `${skill.percent}%`}} className="text-xs  rounded-lg bg-gradient-to-r from-sky-400 to-lime-400 w-fit">&#8203;</div>
                  </div>
                </div>
                </>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
