import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

const AddEntry = () => {
  const [newEntry, setNewEntry] = useState("");
  const [entryId, setEntryId] = useState(false);
  const [clear, setClear] = useState(false);

  const { currentUser } = UserAuth();
  const navigate = useNavigate();

  const journalsCollectionRef = collection(db, "journals");

  const saveEntry = async (e) => {
    e.preventDefault();
    try {
      // check if entry has already been saved
      if (entryId) {
        const entryRef = doc(db, "journals", entryId);
        await updateDoc(entryRef, {
          content: newEntry,
        });
      } else {
        await addDoc(journalsCollectionRef, {
          content: newEntry,
          date: Timestamp.now(),
          author: { name: currentUser.displayName, id: currentUser.uid },
        });

        const q = query(
          journalsCollectionRef,
          where("content", "==", newEntry)
        );
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          setEntryId(doc.id);
        });
      }

      // // clear form
      // if (clear) {
      //   setNewEntry("");
      // }
      // nav back to journal home?
      navigate("/journal");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full h-screen font-sora top-20 bg-cover bg-no-repeat bg-[url('../../public/img/journal.jpg')]">
      <div className="max-w-[600px] m-auto p-4">
        <div className="bg-[#eef2ff] p-2 mb-10 flex flex-col justify-between rounded-lg drop-shadow-md md:h-[700px] sm:h-[500px]">
          {" "}
          <form className="flex flex-col" onSubmit={saveEntry}>
            <textarea
              rows="20"
              cols="80"
              className="border rounded-lg p-4 w-full h-full text-xl"
              value={newEntry}
              type="text"
              placeholder="Journaling..."
              onChange={(e) => setNewEntry(e.target.value)}
            ></textarea>
            <div className="flex flex-rows justify-between py-3">
              <button
                className="border p-2 ml-2 bg-indigo-200 hover:bg-indigo-300 rounded-lg"
                type="submit"
              >
                Save
              </button>
              <button
                className="border p-2 ml-2 bg-indigo-200 hover:bg-indigo-300 rounded-lg"
                type="submit"
                onClick={() => setClear(true)}
              >
                Save & Close
              </button>
            </div>
          </form>
        </div>
        <div className="flex place-content-center">
          <Link to="/journal">
            <button className="border-orange-400 drop-shadow-lg px-3 py-2 ml-2 bg-orange-200 hover:bg-orange-300 rounded-lg">
              Back to Journal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddEntry;
