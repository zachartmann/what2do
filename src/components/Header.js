import React from "react";

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
          <svg className="h-6 w-6 icon blue-icon header-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
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
          <svg className="h-6 w-6 icon blue-icon header-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </p>
      </div>
    )
  }
};

export default Header;