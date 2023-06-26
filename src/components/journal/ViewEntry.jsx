import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
import { MdDeleteForever } from "react-icons/md";

const ViewEntry = () => {
  const [singleEntry, setSingleEntry] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const params = useParams();
  const entryId = params.id;

  const { currentUser } = UserAuth();

  const navigate = useNavigate();

  const journalsCollectionRef = collection(db, "journals");

  const deleteEntry = async (e) => {
    e.preventDefault();
    try {
      await deleteDoc(doc(db, "journals", entryId));
      navigate("/journal");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getSingleEntry = async () => {
      const docRef = doc(journalsCollectionRef, entryId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await setSingleEntry(docSnap.data());
        const date = docSnap.data().date.toDate();
        setDate(date.toDateString());
        setTime(
          date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      } else {
        setSingleEntry(false);
      }
    };
    getSingleEntry();
  }, []);

  return (
    <div className="w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('../../public/img/background3.png')]">
      <div className="max-w-[700px] m-auto p-4">
        <div className="bg-[#eef2ff] bg-no-repeat p-2 mb-10 rounded-lg drop-shadow-md min-h-[800px] ">
          <div className="p-5 flex flex-col justify-between">
            <div className="flex flex-row gap-4 font-sora text-[15px]">
              <div>{date}</div>
              <div>{time}</div>
            </div>
            <div className="pt-5 font-nextDoor text-[28px]">
              {singleEntry.content}
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-content-center">
        <Link to="/journal">
          <button className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg">
            Back to Journal
          </button>
        </Link>
        <div>
          <button
            onClick={deleteEntry}
            className="border p-4 ml-2 bg-red-400 hover:bg-red-300 rounded-lg"
          >
            Delete Entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEntry;
