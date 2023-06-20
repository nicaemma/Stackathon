// import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Signin from "./components/User-Auth/Signin";
import Signup from "./components/User-Auth/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./components/User-Auth/Dashboard";
import ForgotPassword from "./components/User-Auth/ForgotPassword";
import EditProfile from "./components/User-Auth/EditProfile";
import MemoryGame from "./components/MemoryGame";

const App = () => {
  return (
    <>
      <div>{<Navbar />}</div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/memory" element={<MemoryGame />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
