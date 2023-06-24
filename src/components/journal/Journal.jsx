import React from "react";
import Entry from "./Entry";

const Journal = () => {
  return (
    <div className="w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('../../public/img/background3.png')]">
      <div className="max-w-[800px] w-full m-auto p-4">
        <h1>Journal</h1>
        <Entry />
        <Entry />
        <Entry />
        <Entry />
      </div>{" "}
    </div>
  );
};

export default Journal;
