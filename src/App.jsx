// import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Signin from "./components/user-auth/Signin";
import Signup from "./components/user-auth/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./components/user-auth/Dashboard";
import ForgotPassword from "./components/user-auth/ForgotPassword";
import EditProfile from "./components/user-auth/EditProfile";
import MemoryGame from "./components/memory/MemoryGame";

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
