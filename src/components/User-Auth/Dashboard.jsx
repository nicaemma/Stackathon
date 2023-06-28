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
      navigate("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="font-fira w-full h-screen bg-cover bg-no-repeat bg-[url('../../public/img/background4.png')]">
      <div className="w-full h-screen absolute bg-white/30">
        <div className="flex flex-col place-content-center">
          <div className="p-5 font-bold py-2 text-center">
            <h1 className="text-[30px] pb-4">My Account</h1>
            <p className="text-[25px]">Welcome, {currentUser.displayName}</p>
          </div>
          <div className="grid grid-cols-2 pt-8 px-40">
            <div className="w-100 text-center mt-2">
              <button
                onClick={() => navigate("/edit-profile")}
                className="border-pink-500 text-white drop-shadow-sm p-3 ml-2 bg-pink-400 hover:bg-pink-500 rounded-lg"
              >
                Edit Profile
              </button>
            </div>
            <div className="w-100 text-center mt-2">
              <button
                onClick={handleLogout}
                className="border-pink-500 text-white drop-shadow-sm p-3 ml-2 bg-pink-400 hover:bg-pink-500 rounded-lg"
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
