// import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <div>{<Navbar />}</div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Skills />} />
      </Routes>
    </>
  );
};

export default App;
