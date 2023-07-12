import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import axios from "axios";

const Homepage = () => {
  const { currentUser } = UserAuth();

  // const clientId = import.meta.env.VITE_CLIENT_ID;
  // const redirectURI = import.meta.env.VITE_REDIRECT_URI;
  // const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT;
  // const responseType = import.meta.env.VITE_RESPONSE_TYPE;

  // const [token, setToken] = useState("");

  // const [searchKey, setSearchKey] = useState("");

  // const logoutSpotify = () => {
  //   setToken("");
  //   window.localStorage.removeItem("token");
  // };

  // const searchArtists = async (e) => {
  //   console.log("token-->", token);
  //   console.log("bearer-->", `Bearer ${token}`);

  //   e.preventDefault();
  //   const { data } = await axios.get("https://api.spotify.com/v1/search", {
  //     header: {
  //       Authorization: "Bearer" + token,
  //     },
  //     params: {
  //       q: searchKey,
  //       type: "artist",
  //     },
  //   });
  //   console.log("data-->", data);
  // };

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let token = window.localStorage.getItem("token");

  //   if (!token && hash) {
  //     token = hash
  //       .substring(1)
  //       .split("&")
  //       .find((elem) => elem.startsWith("access_token"))
  //       .split("-")[1];
  //     window.localStorage.setItem("token", token);
  //   }
  //   setToken(token);
  // }, []);

  return (
    <div>
      <div className="w-full h-screen font-fira font-bold top-20 bg-cover bg-no-repeat bg-[url('/img/background6.png')]">
        <div className="w-full h-screen top-20 bg-cover bg-white bg-opacity-30">
          <div className="max-w-[600px] m-auto h-full w-full flex flex-col items-center">
            {/* <div className="flex flex-row mt-20 justify-center bg-[#fff7ed] opacity-[90%] rounded-lg"> */}
            <div className="mb-10 mx-auto ">
              <div className="pt-16 px-6 pb-3 flex flex-col flex-wrap gap-4 justify-center items-center text-center">
                {!currentUser ? (
                  <p className="text-2xl sm:text-4xl">
                    Welcome to Mindful Matters
                  </p>
                ) : (
                  <p className="text-2xl sm:text-4xl">
                    Welcome back, {currentUser.displayName}
                  </p>
                )}
              </div>
              <div className="pt-2 px-6 justify-center items-center flex flex-wrap font-rubik sm:text-2xl text-xl text-center">
                {!currentUser ? (
                  <p className="sm:text-lg text-base">
                    Guiding your self care path & cultivating awareness for your
                    wellbeing
                  </p>
                ) : (
                  <div>
                    <p>
                      Continue your self care tracker & cultivating awareness
                      for your wellbeing
                    </p>
                    {/* {!token ? (
                      <a
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}`}
                      >
                        Login to Spotify
                      </a>
                    ) : (
                      <button onClick={logoutSpotify}>
                        Log out of Spotify
                      </button>
                    )} */}

                    {/* {token && (
                      <form onSubmit={searchArtists}>
                        <input
                          type="text"
                          onChange={(e) => setSearchKey(e.target.value)}
                        />
                        <button type={"submit"}>Search</button>
                      </form>
                    )} */}
                  </div>
                )}
              </div>
              {/* </div> */}
            </div>
            {/* </div> */}
            {!currentUser && (
              <div className="flex flex-col justify-center items-center text-xl">
                <div>
                  <Link
                    to="/signin"
                    className="bg-indigo-400 hover:bg-indigo-600 p-3 sm:text-lg text-sm rounded-xl text-white ease-in duration-200 hover:bg-pale-pink"
                  >
                    Sign In / Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
