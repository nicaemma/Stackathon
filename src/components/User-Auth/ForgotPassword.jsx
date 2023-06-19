import React, { useRef, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = UserAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // Passing in whatever you put in email box:
      await resetPassword(email);
      await setEmail("");
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
      setLoading(false);
    }
  }

  return (
    <div className="'max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Reset Password</h1>
      </div>
      {error && <div>{error}</div>}
      {message && <div>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border p-3"
            type="email"
          />
        </div>

        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
