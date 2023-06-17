import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Skill = ({ skill, toggleComplete, deleteSkill }) => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(skill)}
          type="checkbox"
          checked={skill.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(skill)}
          className={skill.completed ? style.textComplete : style.text}
        >
          {skill.text}
        </p>
      </div>
      <button onClick={() => deleteSkill(skill)}>{<FaRegTrashAlt />} </button>
    </li>
  );
};

export default Skill;
