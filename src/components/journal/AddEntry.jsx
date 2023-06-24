import React from "react";

const AddEntry = () => {
  return (
    <div className="w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('../../public/img/background3.png')]">
      <div className="max-w-[800px] m-auto p-4">
        <div className="bg-[#eef2ff] p-2 mb-10 rounded-lg drop-shadow-md min-h-[800px] ">
          {" "}
          <form className="flex flex-col">
            <textarea
              rows="20"
              cols="80"
              className="border p-2 w-full h-full text-xl"
              type="text"
              placeholder="Journaling..."
            ></textarea>
            <button className="border p-4 ml-2 bg-purple-400" type="submit">
              Save
            </button>
            <button className="border p-4 ml-2 bg-purple-400" type="submit">
              Save & Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEntry;
