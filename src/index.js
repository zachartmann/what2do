import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Set default as light theme - I think it looks better :P
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("theme")
  );
  setTimeout(() => {
    document.body.className = "";
  }, 200);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
