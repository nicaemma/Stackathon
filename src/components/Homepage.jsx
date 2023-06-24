import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import homeImg from "../../public/img/background6.png";

import axios from "axios";

const Homepage = () => {
  const { currentUser } = UserAuth();

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectURI = import.meta.env.VITE_REDIRECT_URI;
  const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT;
  const responseType = import.meta.env.VITE_RESPONSE_TYPE;

  const [token, setToken] = useState("");

  const logoutSpotify = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // console.log("token-->", token);
    // console.log("hash-->", hash);

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("-")[1];

      // console.log("token-->", token);

      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  console.log("token-->", token);

  return (
    <div>
      <img className="w-full h-screen top-20 object-cover" src={homeImg} />
      <div className="absolute w-full h-screen top-20 left-0 font-fira">
        <div className="max-w-[600px] m-auto h-full w-full flex flex-col items-center">
          <div className="flex flex-row mt-20 justify-center bg-[#fff7ed] opacity-[90%] rounded-lg">
            <div className="mb-10 ml-4 ">
              <div className="pt-20 px-6 pb-6 flex flex-col flex-wrap gap-4 justify-center items-center text-center">
                {!currentUser ? (
                  <p className="text-2xl sm:text-4xl">
                    Welcome to Mindful Moments
                  </p>
                ) : (
                  <p className="text-2xl sm:text-4xl">
                    Welcome back, {currentUser.displayName}
                  </p>
                )}
              </div>

              <div className="pt-6 px-6 pb-6 justify-center items-center flex flex-wrap font-rubik sm:text-2xl text-xl text-center">
                {!currentUser ? (
                  <p>
                    Guiding your self care path & cultivating awareness for your
                    wellbeing
                  </p>
                ) : (
                  <div>
                    <p>
                      Continue your self care tracker & cultivating awareness
                      for your wellbeing
                    </p>
                    {!token ? (
                      <a
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}`}
                      >
                        Login to Spotify
                      </a>
                    ) : (
                      <button onClick={logoutSpotify}>
                        Log out of Spotify
                      </button>
                    )}
                  </div>
                )}
              </div>
              {/* </div> */}
            </div>
          </div>
          {!currentUser && (
            <div className="mt-5 flex flex-col justify-center items-center text-xl">
              <Link
                to="/signup"
                className="bg-[#60a5fa] px-6 py-3.5 rounded-xl text-white ease-in duration-200 hover:bg-pale-pink"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
