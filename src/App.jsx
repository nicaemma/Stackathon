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
import Journal from "./components/journal/Journal";
import AddEntry from "./components/journal/AddEntry";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <div>{<Navbar />}</div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/memory" element={<MemoryGame />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/write" element={<AddEntry />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
