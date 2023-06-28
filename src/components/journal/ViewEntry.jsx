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
    <div className="w-full h-full font-sora top-20 bg-cover bg-no-repeat bg-[url('/img/journal.jpg')]">
      {!edit ? (
        <div className="flex flex-col gap-4">
          <div className=" m-auto pt-6">
            <div className="bg-[#eef2ff] min-h-[65vh] max-h-[1280px] max-w-[800px] min-w-[400px] p-2 flex flex-col justify-between rounded-lg drop-shadow-md">
              <div className="px-5 py-3 flex flex-col justify-between">
                <div className="flex flex-row gap-4 font-sora text-[15px]">
                  <div>{date}</div>
                  <div>{time}</div>
                </div>
                <div className="pt-5 font-nextDoor text-[25px]">
                  {singleEntry.content}
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[650px] m-auto flex flex-rows gap-3 justify-center">
            <button
              onClick={handleEdit}
              className="border p-2 ml-2 bg-indigo-200 hover:bg-indigo-300 rounded-lg"
              type="submit"
            >
              Edit
            </button>
            <button
              onClick={deleteEntry}
              className="border p-2 ml-2 bg-indigo-200 hover:bg-indigo-300 rounded-lg"
              type="submit"
            >
              Delete
            </button>
          </div>
          <div className="flex place-content-center pb-8">
            <Link to="/journal">
              <button className="border-orange-400 drop-shadow-lg px-3 py-2 ml-2 bg-orange-200 hover:bg-orange-300 rounded-lg">
                Back to Journal
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-[650px] m-auto p-4">
          <div className="bg-[#eef2ff] p-2 mb-10 flex flex-col justify-between rounded-lg drop-shadow-md md:h-[700px] sm:h-[500px]">
            {" "}
            <form className="flex flex-col" onSubmit={editEntry}>
              <textarea
                rows="20"
                cols="80"
                className="border rounded-lg p-4 w-full h-full text-xl"
                value={entry}
                type="text"
                placeholder={entry}
                onChange={(e) => setEntry(e.target.value)}
              ></textarea>
              <div className="flex flex-row justify-between py-3 pr-2">
                <button
                  className="border p-2 ml-2 bg-indigo-200 hover:bg-indigo-300 rounded-lg"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="border p-2 ml-2 bg-indigo-200 hover:bg-indigo-300 rounded-lg"
                  type="submit"
                  onClick={() => setClose(true)}
                >
                  Save & Close
                </button>
              </div>
            </form>
          </div>{" "}
          <div className="flex place-content-center pb-8">
            <Link to="/journal">
              <button className="border-orange-400 drop-shadow-lg px-3 py-2 ml-2 bg-orange-200 hover:bg-orange-300 rounded-lg">
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
