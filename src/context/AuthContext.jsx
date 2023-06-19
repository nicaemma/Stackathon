// We want to be able to access our current user anywhere in our application
import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const signUp = async (name, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = await updateProfile(auth.currentUser, { displayName: name });
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const userInfo = {
    signUp,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

/*
Context:
- For passing down props all the way down into all the children.
- Everything inside the Provider have everything in the value variable in the Provider
- A global state for all the children of the Provider.

- From the docs:
    Context is designed to share data that can be considered 
    “global” for a tree of React components, such as the current 
    authenticated user, theme, or preferred language. 

*/
