import React from "react";

import "./Popups.css";

const AccountPopup = ({ hidden }) => {
  let topClasses = "content popup account-popup";
  if (hidden) {
    topClasses += " hidden";
  }

  return (
    <div className={topClasses}>
      <div className="content-container">
        <div className="content-container">
          <h3 className="centered">
            Signed in as '<em>Zacaz</em>'
          </h3>
        </div>
        <div className="flex-container">
          <button className="flex-grow">Switch to Anonymous</button>
        </div>
      </div>
    </div>
  );
};

export default AccountPopup;
