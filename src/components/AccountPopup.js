import React from "react";

const AccountPopup = () => {
  return (
    <div className="content popup account-popup hidden">
      <div className="content-container">
        <div className="content-container">
          <h3 className="centered">Signed in as '<em>Zacaz</em>'</h3>
        </div>
        <div className="flex-container">
          <button className="flex-grow">Switch to Anonymous</button>
        </div>
      </div>
    </div>
  )
}

export default AccountPopup;