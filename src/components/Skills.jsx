import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Skill from "./Skill";

const style = {
  bg: `h-screen w-screen p-4 bg-indigo-500`,
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
