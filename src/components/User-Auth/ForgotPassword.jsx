import React, { useRef, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = UserAuth();

  return (
    <div className="'max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Reset Password</h1>
      </div>
      <form>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input ref={emailRef} className="border p-3" type="email" />
        </div>

        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
