import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Skill from "./Skill";

const style = {
  bg: `h-screen w-screen p-4 bg-indigo-500`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-2xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-400`,
};

const Skills = () => {
  const [skills, setSkills] = useState([
    "Go for a walk",
    "Yoga",
    "Call a friend",
  ]);
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>My Coping Skills</h3>
        <form className={style.form}>
          <input
            className={style.input}
            type="text"
            placeholder="Add coping skill"
          />
          <button className={style.button}>
            <AiOutlinePlus />
          </button>
        </form>
        <ul>
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
