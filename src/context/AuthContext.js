// We want to be able to access our current user anywhere in our application
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

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
