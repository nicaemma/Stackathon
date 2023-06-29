import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, logOut } = UserAuth();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logOut();
      navigate("/home");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="font-fira w-full h-screen bg-cover bg-no-repeat bg-[url('/img/background4.png')]">
      <div className="w-full h-screen top-20 bg-cover bg-white bg-opacity-30">
        <div className="flex flex-col place-content-center">
          <div className="p-5 font-bold py-2 text-center">
            <h1 className="text-[30px] p-3">My Account</h1>
            <p className="font-sora text-[20px]">
              Welcome, {currentUser.displayName}
            </p>
          </div>
          <div className="font-sora pt-6">
            <div className="text-center mt-2">
              <button
                onClick={() => navigate("/edit-profile")}
                className="text-white drop-shadow-sm p-3 ml-2 bg-red-400 hover:bg-red-600 rounded-lg"
              >
                Edit Profile
              </button>
            </div>
            <div className="text-center mt-2">
              <button
                onClick={handleLogout}
                className="text-white drop-shadow-sm p-3 ml-2 bg-red-400 hover:bg-red-600 rounded-lg"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
