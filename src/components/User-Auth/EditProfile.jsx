import React, { useRef } from "react";
import { UserAuth } from "../../context/AuthContext";

const EditProfile = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, editEmail, editPassword, editProfile } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="'max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Edit Your Information</h1>

        {/* {error && <div>{error}</div>} */}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Name</label>
          <input
            ref={nameRef}
            className="border p-3"
            type="name"
            defaultValue={currentUser.displayName}
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            ref={emailRef}
            className="border p-3"
            type="email"
            defaultValue={currentUser.email}
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            ref={passwordRef}
            className="border p-3"
            type="password"
            placeholder="Leave blank to keep the same"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Confirm Password</label>
          <input
            ref={passwordConfirmRef}
            className="border p-3"
            type="password"
            placeholder="Leave blank to keep the same"
          />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          Submit Edits
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
