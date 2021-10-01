import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="content">
        <div className="content-container footer">
          <div className="content-container trimmed">
            <p className="centered small">
              <svg
                className="h-6 w-6 small icon blue-icon footer-icon love-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Buy us a coffee
            </p>
          </div>
          <div className="content-container trimmed">
            <p className="centered small">Send us feedback</p>
          </div>
        </div>
      </div>
      <div className="footer-buffer"></div>
    </>
  );
};

export default Footer;
