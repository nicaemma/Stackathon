import React, { useEffect, useState } from "react";

const Journal = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectURI = import.meta.env.VITE_REDIRECT_URI;
  const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT;
  const responseType = import.meta.env.VITE_RESPONSE_TYPE;

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    console.log("token-->", token);
    console.log("hash-->", hash);

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("-")[1];

      console.log("token-->", token);
    }
  }, []);

  return (
    <div>
      <h1>Journal</h1>
      <a
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}`}
      >
        Login to Spotify
      </a>
    </div>
  );
};

export default Journal;
