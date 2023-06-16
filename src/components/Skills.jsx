import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const style = {
  bg: `h-screen w-screen p-4 bg-indigo-500`,
};

const Skills = () => {
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
      </div>
    </div>
  );
};

export default Skills;
