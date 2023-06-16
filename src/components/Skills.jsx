import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Skill from "./Skill";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-indigo-500`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-2xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-400`,
};

const Skills = () => {
  const [skills, setSkills] = useState([]);

  // Create skill
  // Read skill from firebase
  const skillsCollectionRef = collection(db, "skills");
  useEffect(() => {
    const getSkills = async () => {
      const data = await getDocs(skillsCollectionRef);
      setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSkills();
  }, []);

  console.log("skills-->", skills);

  // Update skill in firebase
  // Delete skill

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
