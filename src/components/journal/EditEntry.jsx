import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const EditEntry = ({ entryId, content }) => {
  const [entry, setEntry] = useState("");

  const [edit, setEdit] = useState(true);

  const editEntry = async (e) => {
    e.preventDefault();
    try {
      const entryRef = doc(db, "journals", entryId);
      await updateDoc(entryRef, {
        content: entry,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    setEntry(content);
  }, []);

  return (
    <div>
      <div>
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
              onClick={() => setEdit(false)}
            >
              Save & Close
            </button>
          </div>
        </form>
        <div>
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

export default EditEntry;
