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
    <div className="w-full h-[100vh] font-sora top-20 bg-cover bg-no-repeat bg-[url('/img/journal.jpg')]">
      <div className="w-full h-full top-20 bg-cover bg-white bg-opacity-30">
        {entries.length === 0 ? (
          <div className="max-w-[960px] m-auto p-3 flex flex-col gap-8 items-center">
            <div className="p-3 max-w-[500px] flex flex-col items-center">
              <h1 className="font-stalemate text-[60px] pb-2">Journaling</h1>
              <div className="py-5 px-3 rounded-lg text-center bg-orange-100">
                This page is designed to empower you on your self care journey
                and provide a space for self-reflection. Take a moment to pause,
                breathe, and let your thoughts flow onto the digital canvas.
                Feel free to explore your emotions, aspirations, and experiences
                as you write and save your journal entries here. Happy
                journaling!
              </div>
            </div>
            <div className="place-content-centerflex">
              {!currentUser ? (
                <div>
                  <Link to="/signin">
                    <div className="bg-slate-100 max-w-[400px] hover:bg-slate-200 w-full m-auto text-center rounded-md shadow-xl p-4">
                      <span className="font-extrabold">Sign in</span> to start
                      your journal!
                    </div>
                  </Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-[960px] m-auto pb-8 px-4 flex flex-col gap-8 items-center">
            <div className="p-3 w-[500px] flex flex-col items-center">
              <h1 className="font-stalemate text-[60px] pb-2">Journaling</h1>
              <div className="py-5 px-3 rounded-lg text-center bg-orange-100">
                This page is designed to provide a space for self-reflection
                along your self care journey. Feel free to explore your
                emotions, aspirations, and experiences as you write, save, and
                re-read your journal entries here. Happy journaling!
              </div>
            </div>
            <div className="place-content-centerflex">
              <Link to="/journal/write">
                <button className="border-orange-300 drop-shadow-sm p-3 ml-2 bg-orange-200 hover:bg-orange-300 rounded-lg">
                  Write New Entry
                </button>
              </Link>
            </div>
            <div>
              <h1 className="font-sora text-[20px] text-center pt-3 pb-4">
                Past Entries
              </h1>
              <div className="max-w-[960px] place-content-center m-auto p-3 grid md:grid-cols-3 gap-6">
                {entries.map((entry, index) => (
                  <Entry key={index} entry={entry} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>{" "}
    </div>
  );
};

export default Journal;
