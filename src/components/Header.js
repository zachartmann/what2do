import React, { useContext, useState } from "react";
import "./Header.css";
import Account from "../components/Account";
import { EnvironmentContext } from "../App";

const Header = ({ pollId }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const environmentUrl = useContext(EnvironmentContext);
  const iconFill = theme === "dark" ? "mediumslateblue" : "none";

  const switchTheme = () => {
    var current = document.documentElement.getAttribute("data-theme");
    var newTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const handleClick = () => {
    navigator.clipboard.writeText(`${environmentUrl}/poll/${pollId}`);
    alert("Link copied!");
  };

  if (pollId === "") {
    // Show the create-poll UI since there's no ID
    return (
      <div className="header">
        <div className="inline">
          <b>Welcome to what2do!</b>
          <svg
            className="h-6 w-6 icon blue-icon header-icon button-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill={iconFill}
            viewBox="0 0 24 24"
            onClick={switchTheme}
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
          <button onClick={handleClick}>Copy Link</button>
          <svg
            className="h-6 w-6 icon blue-icon header-icon button-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill={iconFill}
            viewBox="0 0 24 24"
            onClick={switchTheme}
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
