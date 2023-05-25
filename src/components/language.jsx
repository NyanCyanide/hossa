import React, { useEffect, useState } from "react";

export default function language() {
  const [hobbies, setHobbies] = useState([
    { name: "English" },
    { name: "Kannada" },
    { name: "Hindi" },
  ]);

  const [newItem, setNewItem] = useState("");

  const [val, setValue] = useState(0);

  const deleteItem = (name_) => {
    const newHobbies = hobbies.filter((hobby) => hobby.name !== name_);
    setHobbies(newHobbies);
    localStorage.setItem("hobbie", JSON.stringify(hobbies));
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const addItem = () => {
    setValue(0);
    if (newItem.trim() !== "") {
      console.log(newItem);
      setHobbies([...hobbies, {'name' : newItem}]);
      setNewItem("");
      localStorage.setItem("hobbie", JSON.stringify([...hobbies, {'name' : newItem}]));
    }
  };

  useEffect(() => {
    const stored2 = localStorage.getItem("hobbie");
    console.log(stored2);
    if (stored2) {
      setHobbies(JSON.parse(stored2));
    }
  }, []);

  return (
    <>
      <div className="my-4">
        <p className="dark:text-white text-5xl">Hobbies</p>
        <div className="grid grid-flow-cols mt-4 grid-cols-1 gap-y-4 md:mr-20">
          {hobbies.map((hobby) => {
            return (
              <>
                <div
                  id={hobby.name}
                  className="flex px-3 text-white flex-row justify-between items-center bg-newpink rounded-sm py-2"
                >
                  <p className="text-xl">{hobby.name}</p>
                  <button onClick={() => deleteItem(hobby.name)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </>
            );
          })}
          {val === 1 && (
            <input
              id="getbab"
              onChange={handleInputChange}
              type="text"
              className="py-2 px-3"
              placeholder="Language"
            />
          )}
          {hobbies.length < 3 && val == 0 && (
            <button
              onClick={() => {
                setValue(val + 1);
              }}
              className="flex px-3 text-white flex-row justify-center items-center bg-gradient-to-r from-newpink to-grad-p1 rounded-sm py-2 space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-xl">Add Skill</p>
            </button>
          )}
          {val === 1 && (
            <>
              <button
                onClick={() => addItem()}
                className="flex px-3 text-white flex-row justify-center items-center bg-lime-500 rounded-sm py-2 space-x-2"
              >
                <p className="text-xl text-black">Add</p>
              </button>
              <button
                onClick={() => setValue(val - 1)}
                className="flex px-3 text-white flex-row justify-center items-center bg-red-500 rounded-sm py-2 space-x-2"
              >
                <p className="text-xl">Cancel</p>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
