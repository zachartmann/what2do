import React from "react";
import AccountPopup from "./AccountPopup";

const Account = () => {
  return (
    <>
      <svg className="h-6 w-6 icon blue-icon header-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <AccountPopup />
    </>
  )
}

export default Account;