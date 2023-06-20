import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Skill from "./Skill";
import { UserAuth } from "../context/AuthContext";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

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
  const [newSkill, setNewSkill] = useState("");

  const { currentUser } = UserAuth();

  // Read skill from firebase --> changed to responsive to changes real-time
  const skillsCollectionRef = collection(db, "skills");

  useEffect(() => {
    const getSkills = async () => {
      const id = currentUser.uid;
      const data = await getDocs(skillsCollectionRef);
      const q = query(skillsCollectionRef);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let skillsArr = [];
        querySnapshot.forEach((doc) => {
          skillsArr.push({ ...doc.data(), id: doc.id });
        });
        const finalArr = skillsArr.filter((skill) => {
          if (skill.author) {
            if (skill.author.id === id) return skill;
          }
        });
        setSkills(finalArr);
      });
    };
    getSkills();
  }, []);

  // Create skill
  const createSkill = async (e) => {
    e.preventDefault();
    try {
      await addDoc(skillsCollectionRef, {
        text: newSkill,
        completed: false,
        // category: category,
        // benefits: benefits,
        // obstacles: obstacles,
        author: { name: currentUser.displayName, id: currentUser.uid },
      });
      setNewSkill("");
      // navigate("/my-coping-skills");
    } catch (err) {
      console.log(err.message);
    }
  };

  // Update skill in firebase
  const toggleComplete = async (skill) => {
    // console.log("skill ID-->", skill.id);
    const skillRef = doc(db, "skills", skill.id);
    try {
      await updateDoc(skillRef, {
        completed: !skill.completed,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // Delete skill
  const deleteSkill = async (skill) => {
    const skillRef = doc(db, "skills", skill.id);
    try {
      await deleteDoc(skillRef);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>My Coping Skills</h3>
        <form className={style.form} onSubmit={createSkill}>
          <input
            value={newSkill}
            className={style.input}
            type="text"
            placeholder="Add coping skill"
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button className={style.button} type="submit">
            <AiOutlinePlus />
          </button>
        </form>
        <ul>
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skill={skill}
              toggleComplete={toggleComplete}
              deleteSkill={deleteSkill}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
