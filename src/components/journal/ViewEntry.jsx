import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  collection,
  getDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const ViewEntry = () => {
  const [singleEntry, setSingleEntry] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [entry, setEntry] = useState("");
  const [edit, setEdit] = useState("");
  const [close, setClose] = useState(false);

  const params = useParams();
  const entryId = params.id;
  const navigate = useNavigate();

  const journalsCollectionRef = collection(db, "journals");

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

  const deleteEntry = async (e) => {
    e.preventDefault();
    try {
      await deleteDoc(doc(db, "journals", entryId));
      navigate("/journal");
    } catch (err) {
      console.log(err.message);
    }
  };

  const editEntry = async (e) => {
    e.preventDefault();
    try {
      const entryRef = doc(db, "journals", entryId);
      await updateDoc(entryRef, {
        content: entry,
      });
      await getSingleEntry();

      // Switch from Edit back to View
      if (close) {
        setEdit(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleEdit = async () => {
    await setEntry(singleEntry.content);
    setEdit(true);
  };

  useEffect(() => {
    getSingleEntry();
  }, []);

  return (
    <div className="w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('../../public/img/background3.png')]">
      {!edit ? (
        <div>
          <div className="max-w-[700px] m-auto p-4">
            <div className="bg-[#eef2ff] bg-no-repeat p-2 mb-10 rounded-lg drop-shadow-md min-h-[800px]">
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
            <div>
              <button
                onClick={handleEdit}
                className="border p-4 ml-2 bg-red-400 hover:bg-red-300 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={deleteEntry}
                className="border p-4 ml-2 bg-red-400 hover:bg-red-300 rounded-lg"
              >
                Delete
              </button>
            </div>
            <Link to="/journal">
              <button className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg">
                Back to Journal
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-[700px] m-auto p-4">
          <div className="bg-[#eef2ff] bg-no-repeat p-2 mb-10 rounded-lg drop-shadow-md min-h-[800px]">
            <form className="flex flex-col" onSubmit={editEntry}>
              <textarea
                rows="20"
                cols="80"
                className="border p-2 w-full h-full text-xl"
                value={entry}
                type="text"
                placeholder={entry}
                onChange={(e) => setEntry(e.target.value)}
              ></textarea>
              <div className="flex flex-row justify-center">
                <button
                  className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg"
                  type="submit"
                  onClick={() => setClose(true)}
                >
                  Save & Close
                </button>
              </div>
            </form>
          </div>
          <div>
            <Link to="/journal">
              <button className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg">
                Back to Journal
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewEntry;
