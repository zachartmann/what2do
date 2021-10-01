import React from "react";

import "./Header.css";

import Account from "../components/Account";

const Header = ({ pollId }) => {
  if (pollId === "") {
    // Show the create-poll UI since there's no ID
    return (
      <div className="header">
        <div className="inline">
          <b>Welcome to what2do!</b>
          <svg
            className="h-6 w-6 icon blue-icon header-icon button-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <Account />
        </div>
      </div>
    );
  } else {
    // Show pollId and ability to copy link
    return (
      <div className="header">
        <div className="inline">
          <b>what2do.com/{pollId} </b>
          <button>Copy Link</button>
          <svg
            className="h-6 w-6 icon blue-icon header-icon button-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <Account />
        </div>
      </div>
    );
  }
};

export default Header;
