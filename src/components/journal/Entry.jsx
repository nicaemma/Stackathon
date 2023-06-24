import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Entry = () => {
  return (
    <div className="bg-[#f3e8ff] flex flex-col justify-between p-2 mb-10 border-r-10 min-h-[170px]">
      <span>First test journal entry</span>
      <div>
        <small>Date of entry</small>
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default Entry;
