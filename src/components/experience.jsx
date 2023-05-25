import React, {useState} from "react";
import ms from "../assets/microsoft.png";
import consuma from "../assets/consuma.png";
import google from "../assets/google.png";

export default function experience() {

  const [selectedOption, setSelectedOption] = useState('1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="my-4 select-none md:my-0">
        <p className="dark:text-white text-5xl">Experience</p>
        <div className="md:mr-20 mt-8 font-bold text-sm md:mt-10">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-start">
              <input
                id="radiolabel1"
                name="experience"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                checked={selectedOption == 1}
                onChange={handleOptionChange}
                value='1'
              />
              <label
                htmlFor="radiolabel1"
                className="flex dark:text-white flex-col peer-checked:bg-red-200 group items-start justify-center "
              >
                <p>2023 - 2024</p>
                <p>Consuma</p>
              </label>
            </div>
            <div className="flex flex-col items-center">
              <input
                id="radiolabel2"
                name="experience"
                className="w-4 h-4 text-black bg-black border-black focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                checked={selectedOption == 2}
                onChange={handleOptionChange}
                value="2"
              />
              <label
                htmlFor="radiolabel2"
                className="flex dark:text-white flex-col items-center justify-center peer-checked:bg-red-200 "
              >
                <p>2024 - 2030</p>
                <p>Microsoft</p>
              </label>
            </div>
            <div className="flex flex-col items-end">
              <input
                id="radiolabel3"
                name="experience"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                checked={selectedOption == 3}
                onChange={handleOptionChange}
                value="3"
              />
              <label
                htmlFor="radiolabel3"
                className="flex dark:text-white flex-col items-end justify-center peer-checked:bg-red-200"
              >
                <p>2030 - 2050</p>
                <p>Google</p>
              </label>
            </div>
          </div>
          <hr className="border-t-4 -mt-12 dark:border-white border-gray-600" />
          <div className="duration-500">
            {
              selectedOption == 1 &&
              
            <div className="bg-yellow-400 mt-16 flex flex-col-reverse md:flex-row justify-between items-center rounded-lg">
              <div className="px-4 text-justify pb-4 md:w-4/5 md:py-3 md:px-5">
                <p className="my-2">Consuma</p>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo omnis eos necessitatibus quisquam placeat unde commodi quis culpa aut quidem quam distinctio, vitae nisi? Repudiandae eum sapiente assumenda illum.</p>
              </div>
              <div className="w-2/5 p-4 md:w-1/5 md:p-4">
                <img src={consuma} alt="" />
              </div>
            </div>
            }
            {
              selectedOption == 2 &&
              
            <div className="bg-blue-400 mt-16 flex flex-col-reverse md:flex-row justify-between items-center rounded-lg">
              <div className="px-4 text-justify pb-4 md:w-4/5 md:py-3 md:px-5">
                <p className="my-2">Microsoft</p>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo omnis eos necessitatibus quisquam placeat unde commodi quis culpa aut quidem quam distinctio, vitae nisi? Repudiandae eum sapiente assumenda illum.</p>
              </div>
              <div className="w-2/5 p-4 md:w-1/5 md:p-4">
                <img src={ms} alt="" />
              </div>
            </div>
            }
            {
              selectedOption == 3 &&
              
            <div className="bg-red-400 mt-16 flex flex-col-reverse md:flex-row justify-between items-center rounded-lg">
              <div className="px-4 text-justify pb-4 md:w-4/5 md:py-3 md:px-5">
                <p className="my-2">Google</p>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo omnis eos necessitatibus quisquam placeat unde commodi quis culpa aut quidem quam distinctio, vitae nisi? Repudiandae eum sapiente assumenda illum.</p>
              </div>
              <div className="w-2/5 p-4 md:w-1/5 md:p-4">
                <img src={google} alt="" />
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}
