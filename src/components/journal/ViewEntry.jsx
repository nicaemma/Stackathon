import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";

const ViewEntry = () => {
  const [singleEntry, setSingleEntry] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const params = useParams();
  const entryId = params.id;

  const { currentUser } = UserAuth();

  const journalsCollectionRef = collection(db, "journals");

  useEffect(() => {
    const getSingleEntry = async () => {
      const docRef = doc(journalsCollectionRef, entryId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const entry = docSnap.data();
        console.log("entry-->", entry);
        setSingleEntry(entry);
        const date = singleEntry.date.toDate();
        setDate(date.toDateString());
        setTime(
          date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
        console.log("date-->", date);
      } else {
        setSingleEntry(false);
      }
    };
    getSingleEntry();
  }, []);

  return (
    <div className="w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('../../public/img/background3.png')]">
      <div className="max-w-[800px] m-auto p-4">
        <div className="bg-[#eef2ff] p-2 mb-10 rounded-lg drop-shadow-md min-h-[800px] ">
          <div>
            <div>{date}</div>
            <div>{time}</div>
            <div>{singleEntry.content}</div>
          </div>
          <Link to="/journal">
            <button className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg">
              Back to Journal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewEntry;
