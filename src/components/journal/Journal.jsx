import React, { useState, useEffect } from "react";
import Entry from "./Entry";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
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
    <div className="w-full h-screen font-sora top-20 bg-cover bg-no-repeat bg-[url('../../public/img/journal.jpg')]">
      {!entries ? (
        <div className="max-w-[960px] m-auto p-3 flex flex-col gap-8 items-center">
          <div className="p-3 max-w-[500px] flex flex-col items-center">
            <h1 className="font-stalemate text-[60px] pb-2">Journaling</h1>
            <div className="py-5 px-3 rounded-lg text-center ">
              This page is designed to empower you on your self care journey and
              provide a space for self-reflection. Take a moment to pause,
              breathe, and let your thoughts flow onto the digital canvas. Feel
              free to explore your emotions, aspirations, and experiences as you
              write and save your journal entries here. May this journaling
              space be a catalyst for self-discovery and personal growth. Happy
              journaling!
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[960px] m-auto p-3 flex flex-col gap-8 items-center">
          <div className="p-3 max-w-[500px] flex flex-col items-center">
            <h1 className="font-stalemate text-[60px] pb-2">Journaling</h1>
            <div className="py-5 px-3 rounded-lg text-center ">
              This page is designed to provide a space for self-reflection along
              your self care journey. Feel free to explore your emotions,
              aspirations, and experiences as you write, save, and re-read your
              journal entries here. Happy journaling!
            </div>
          </div>
          <div>
            <h1 className="font-sora text-[20px] text-center pt-8 pb-4">
              Past Entries
            </h1>
            <div className="max-w-[960px] place-content-center m-auto p-3 grid md:grid-cols-3 gap-10">
              {entries.map((entry, index) => (
                <Entry key={index} entry={entry} />
              ))}
            </div>
          </div>

          <div className="place-content-center p-3 flex">
            <Link to="/journal/write">
              <button className="border p-3 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg">
                Write New Entry
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journal;
