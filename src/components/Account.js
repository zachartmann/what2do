import React, { useState } from "react";
import AccountPopup from "./AccountPopup";

const Account = () => {

  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  }

  return (
    <>
      <svg className="h-6 w-6 icon blue-icon header-icon button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" onClick={handleClick}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <AccountPopup hidden={hidden}/>
    </>
  )
}

export default Account;