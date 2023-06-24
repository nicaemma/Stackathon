import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Entry = ({ entry }) => {
  const formattedDate = entry.date.toDateString();
  const formattedTime = entry.date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const entryId = entry.id;

  return (
    <div className="bg-[#eef2ff] flex flex-col justify-between p-2 mb-10 rounded-lg drop-shadow-md min-h-[170px] ">
      <span>{entry.content}</span>
      <div className="flex items-center justify-between">
        <small>{formattedDate}</small>
        <Link to={`/journal/${entryId}`}>
          <button className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg">
            View
          </button>
        </Link>
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default Entry;
