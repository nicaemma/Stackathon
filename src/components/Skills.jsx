import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Skill from "./Skill";
import { UserAuth } from "../context/AuthContext";
import skillsImg from "../../public/img/background5.png";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  deleteDoc,
} from "firebase/firestore";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const { currentUser } = UserAuth();

  // Read skill from firebase --> changed to responsive to changes real-time
  const skillsCollectionRef = collection(db, "skills");

  useEffect(() => {
    const getSkills = async () => {
      const id = currentUser.uid;
      await getDocs(skillsCollectionRef);
      const q = query(skillsCollectionRef);
      onSnapshot(q, (querySnapshot) => {
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
        author: { name: currentUser.displayName, id: currentUser.uid },
      });
      setNewSkill("");
    } catch (err) {
      console.log(err.message);
    }
  };

  // Update skill in firebase
  const toggleComplete = async (skill) => {
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
    <div className="font-sora w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('/img/background5.png')]">
      <div className="w-full h-screen top-20 bg-cover bg-white bg-opacity-30">
        <div className="max-w-[960px] m-auto p-3 flex flex-col gap-8 items-center">
          <div className="p-3 max-w-[550px] flex flex-col gap-2 items-center">
            <h3 className="text-2xl font-bold text-center text-gray-800 p-3">
              My Stress Relievers
            </h3>
            <div className="py-4 px-3 rounded-lg text-center bg-indigo-200">
              <div>
                Coping skills help us navigate and overcome stressful moments
                with increasing ease. Use this page to add stress relievers to
                your personal list and track their use.
              </div>
            </div>
          </div>
          <form className="flex justify-between" onSubmit={createSkill}>
            <input
              value={newSkill}
              className="border-[1px] border-gray-400 p-2 w-full text-xl rounded-md"
              type="text"
              placeholder="Add coping skill"
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button
              className="p-4 ml-2 rounded-full bg-indigo-300 hover:bg-indigo-400"
              type="submit"
            >
              <AiOutlinePlus />
            </button>
          </form>
        </div>
        <div className="bg-slate-100 max-w-[400px] w-full m-auto rounded-md shadow-xl p-4">
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
    </div>
  );
};

export default Skills;
