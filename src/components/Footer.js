import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="content">
        <div className="content-container footer">
          <div className="content-container trimmed">
            <a href="https://www.paypal.com.au">
              <p className="centered small">
                <svg
                  className="h-6 w-6 small icon blue-icon footer-icon love-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Buy us a coffee
              </p>
            </a>
          </div>
          <div className="content-container trimmed">
            <a href="/feedback">Send us feedback</a>
          </div>
        </div>
      </div>
      <div className="footer-buffer"></div>
    </>
  );
};

export default Footer;
