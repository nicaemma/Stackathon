// import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <div>{<Navbar />}</div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
