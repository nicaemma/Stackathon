import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, logOut } = UserAuth();
  console.log("currentUser-->", currentUser);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logOut();
      navigate("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <h1>Dashboard</h1>
      <p>{currentUser.displayName}</p>
      <div className="w-100 text-center mt-2">
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </>
  );
};

export default Dashboard;
