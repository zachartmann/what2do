import React, { useState } from "react";
import { getUser, postUser } from "../common/requests/User";
import "./Popups.css";

const LoginPopup = ({ hidden, toggleHidden }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let topClasses = `content popup login-popup ${hidden ? "hidden" : ""}`;

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let user = undefined;

    function loginUser(name) {
      localStorage.setItem("user", name);
      setErrorMessage("");
      toggleHidden();
      window.location.reload();
    }

    if (name) {
      user = await getUser(name, password);
      console.log(user);

      if (user.error === "User does not exist") {
        await postUser(name, password);
        console.log(`User created: ${name}`);
        loginUser(name);
      } else if (user.error === "Incorrect password") {
        setErrorMessage("Incorrect password");
      } else {
        loginUser(name);
      }
    }
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
          <div className="content-container">
            <p style={{ color: "red" }}>{errorMessage}</p>
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
                onClick={() => {
                  toggleHidden();
                  setErrorMessage("");
                }}
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
