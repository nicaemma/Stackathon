import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Entry = () => {
  return (
    <div className="bg-[#eef2ff] flex flex-col justify-between p-2 mb-10 rounded-lg drop-shadow-md min-h-[170px]">
      <span>First test journal entry</span>
      <div className="flex items-center justify-between">
        <small>Date of entry</small>
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default Entry;
