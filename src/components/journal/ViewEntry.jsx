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
      } else {
        console.log("No such document!");
      }
    };
    getSingleEntry();
  }, []);

  const date = singleEntry.date.toDate();
  console.log("date-->", date);

  return (
    <div>
      <div>
        <div>view entry</div>
      </div>
    </div>
  );
};

export default ViewEntry;
