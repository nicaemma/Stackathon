import React from "react";

import { Link } from "react-router-dom";

const Entry = ({ entry }) => {
  const formattedDate = entry.date.toDateString();
  const formattedTime = entry.date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const entryId = entry.id;

  return (
    <div className="bg-[#eef2ff] font-sora p-2 mb-10 rounded-lg drop-shadow-md h-[120px] w-[220px]">
      <div className="flex flex-col justify-between items-center">
        <div className="pt-3">{formattedDate}</div>
        <div className="pt-3">
          <Link to={`/journal/${entryId}`}>
            <button className="border p-2 ml-2 bg-indigo-200 hover:bg-indigo-300 rounded-lg">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Entry;
