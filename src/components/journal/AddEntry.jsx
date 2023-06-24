import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AddEntry = () => {
  const [newEntry, setNewEntry] = useState("");

  const location = useLocation();
  const { test } = location.state;
  console.log("test-->", test);

  //   const saveEntry = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await addDoc(skillsCollectionRef, {
  //         text: newSkill,
  //         completed: false,
  //         author: { name: currentUser.displayName, id: currentUser.uid },
  //       });
  //       setNewSkill("");
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };

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
              value={newEntry}
              type="text"
              placeholder="Journaling..."
              onChange={(e) => setNewEntry(e.target.value)}
            ></textarea>
            <div className="flex flex-row justify-center">
              <button
                className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg"
                type="submit"
              >
                Save
              </button>
              <button
                className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg"
                type="submit"
              >
                Save & Close
              </button>
            </div>
          </form>
          <Link to="/journal" state={{ test: "this works" }}>
            <button className="border p-4 ml-2 bg-purple-400 hover:bg-purple-300 rounded-lg">
              Back to Journal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddEntry;
