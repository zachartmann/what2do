import React from "react";

import Account from "../components/Account";

const Header = ({ pollId }) => {

  if (pollId === "") {
    // Show the create-poll UI since there's no ID
    return (
      <div className="header">
        <p>
          <b>Welcome to what2do!</b>
          <svg className="h-6 w-6 icon blue-icon header-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <Account />
        </p>
      </div>
    )
  } else {
    // Show pollId and ability to copy link
    return (
      <div className="header">
        <p>
          <b>what2do.com/{pollId}</b>
          <button>Copy Link</button>
          <svg className="h-6 w-6 icon blue-icon header-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <Account />
        </p>
      </div>
    )
  }
};

export default Header;