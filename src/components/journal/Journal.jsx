import React from "react";

const Journal = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const redirectURI = import.meta.env.VITE_REDIRECT_URI;
  const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT;
  const responseType = import.meta.env.VITE_RESPONSE_TYPE;
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
