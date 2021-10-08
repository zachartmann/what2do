import React from "react";

import "./Popups.css";

const AccountPopup = ({ hidden, toggleHidden }) => {
  let topClasses = "content popup account-popup";
  if (hidden) {
    topClasses += " hidden";
  }

  const handleAnonClick = () => {
    localStorage.removeItem("user");
    toggleHidden();
    window.location.reload();
  };

  return (
    <div className={topClasses}>
      <div className="content-container">
        <div className="content-container">
          <h3 className="centered">
            Signed in as '
            <em>
              {localStorage.getItem("user")
                ? localStorage.getItem("user")
                : "Anonymous"}
            </em>
            ' {/*TODO: fix*/}
          </h3>
        </div>
        <div className="flex-container">
          <button className="flex-grow" onClick={handleAnonClick}>
            Switch to Anonymous
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPopup;
