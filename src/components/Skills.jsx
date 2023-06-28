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
    <div className="w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('/img/background5.png')]">
      <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        <h3 className="text-2xl font-bold text-center text-gray-800 p-2">
          My Stress Relievers
        </h3>
        <form className="flex justify-between" onSubmit={createSkill}>
          <input
            value={newSkill}
            className="border p-2 w-full text-xl"
            type="text"
            placeholder="Add coping skill"
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button className="border p-4 ml-2 bg-purple-400" type="submit">
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
