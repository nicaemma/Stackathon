import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Entry = ({ entry }) => {
  const formattedDate = entry.date.toDateString();
  const formattedTime = entry.date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log(formattedDate);
  console.log(formattedTime);
  return (
    <div className="bg-[#eef2ff] flex flex-col justify-between p-2 mb-10 rounded-lg drop-shadow-md min-h-[170px] ">
      <span>{entry.content}</span>
      <div className="flex items-center justify-between">
        <small>{formattedDate}</small>
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default Entry;
