import React from "react";

import InfoPopup from "./InfoPopup";

const Info = ({ text }) => {
  return (
    <>
      <svg className="h-6 w-6 icon blue-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <InfoPopup />
    </>
  )
};

export default Info;