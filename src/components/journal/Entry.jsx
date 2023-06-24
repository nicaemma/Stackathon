import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Entry = () => {
  return (
    <div>
      <span>First test journal entry</span>
      <div>
        <small>Date of entry</small>
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default Entry;
