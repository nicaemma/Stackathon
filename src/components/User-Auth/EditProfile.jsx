import React, { useRef, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const EditProfile = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, editEmail, editPassword, editProfile } = UserAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("Passwords do not match");
    }
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      try {
        await editEmail(emailRef.current.value);
      } catch (err) {
        return setError(err.message);
      }
    }
    if (passwordRef.current.value) {
      try {
        await editPassword(passwordRef.current.value);
      } catch (err) {
        return setError(err.message);
      }
    }
    if (nameRef.current.value !== currentUser.displayName) {
      try {
        await editProfile(nameRef.current.value);
      } catch (err) {
        return setError(err.message);
      }
    }
    navigate("/dashboard");
  };
  return (
    <div className="'max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Edit Your Information</h1>

        {error && <div>{error}</div>}
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
        <div>
          <Link to="/dashboard">Back to Dashboard</Link>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
