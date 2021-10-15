import React, { useState } from "react";
import { postUser } from "../common/requests/User";
import "./Popups.css";

const LoginPopup = ({ hidden, toggleHidden }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let topClasses = `content popup login-popup ${hidden ? "hidden" : ""}`;

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (name) {
      await postUser(name, password);
      localStorage.setItem("user", name);
      console.log(`User created: ${name}`);
      window.location.reload();
    }
    toggleHidden();
  };

  return (
    <div className={topClasses}>
      <div className="content-container">
        <form onSubmit={handleSubmit}>
          <div className="content-container">
            <h3>Login (optional)</h3>
          </div>
          <div className="content-container">
            <input
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="content-container">
            <input
              placeholder="Your password (optional)"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="flex-container">
            <div className="flex-component flex-70 flex-end">
              <button type="submit">Confirm</button>
            </div>
            <div style={{ width: "10px" }}></div>
            <div className="flex-component flex-30">
              <button
                type="button"
                className="inverted-button"
                onClick={() => toggleHidden()}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
