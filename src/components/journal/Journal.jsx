import React, { useState, useEffect } from "react";
import Entry from "./Entry";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
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
import { Link } from "react-router-dom";

const Journal = () => {
  const [entries, setEntries] = useState([]);

  const { currentUser } = UserAuth();

  const journalsCollectionRef = collection(db, "journals");

  useEffect(() => {
    const getEntries = async () => {
      const id = currentUser.uid;
      await getDocs(journalsCollectionRef);
      const q = query(journalsCollectionRef);
      onSnapshot(q, (querySnapshot) => {
        let entriesArr = [];
        querySnapshot.forEach((doc) => {
          entriesArr.push({ ...doc.data(), id: doc.id });
        });
        if (entriesArr) {
          const finalArr = entriesArr
            .filter((entry) => {
              if (entry.author) {
                if (entry.author.id === id) return entry;
              }
            })
            .map((entry) => {
              return {
                ...entry,
                date: entry.date.toDate(),
              };
            });
          setEntries(finalArr);
        }
      });
    };
    getEntries();
  }, []);

  return (
    <div className="w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('../../public/img/background3.png')]">
      <div className="max-w-[960px] m-auto p-4 grid grid-flow-col auto-cols-[minmax(250,_1fr)] gap-4">
        {entries.map((entry, index) => (
          <Entry key={index} entry={entry} />
        ))}
      </div>
      <Link to="/write">
        <button className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg">
          Write New Entry
        </button>
      </Link>
    </div>
  );
};

export default Journal;
