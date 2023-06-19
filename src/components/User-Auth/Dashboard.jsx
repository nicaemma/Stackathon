import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { currentUser } = UserAuth();

  console.log("currentUser-->", currentUser);

  return (
    <>
      <h1>Dashboard</h1>
      <p>{currentUser.displayName}</p>
    </>
  );
};

export default Dashboard;
