// We want to be able to access our current user anywhere in our application
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = async (name, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
    } catch (err) {
      console.log(err.message);
    }
  };

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async (email, password) => {
    await signOut(auth, email, password);
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const userInfo = {
    currentUser,
    signUp,
    signIn,
    logOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {!loading && children}
    </AuthContext.Provider>
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
