import React, { useState } from "react";
import Entry from "./Entry";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");

  return (
    <div className="w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('../../public/img/background3.png')]">
      <div className="max-w-[960px] m-auto p-4 grid grid-flow-col auto-cols-[minmax(250,_1fr)] gap-4">
        <Entry />
        <Entry />
        <Entry />
        <Entry />
      </div>{" "}
    </div>
  );
};

export default Journal;
