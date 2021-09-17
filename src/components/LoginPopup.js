import React from "react";

const LoginPopup = () => {
  return (
    <div className="content popup login-popup hidden">
      <div className="content-container">
        <div className="content-container">
          <h3>Login (optional)</h3>
        </div>
        <div className="content-container">
          <input placeholder="Your name"></input>
        </div>
        <div className="content-container">
          <input placeholder="Your password (optional)"></input>
        </div>
        <div className="flex-container">
          <div className="flex-component flex-70 flex-end">
            <button>Confirm</button>
          </div>
          <div style={{ width: "10px" }}></div>
          <div className="flex-component flex-30">
            <button className="inverted-button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPopup;