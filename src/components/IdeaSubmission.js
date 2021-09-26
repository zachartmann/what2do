import React from "react";

import IncludeName from "./IncludeName";
import Info from "./Info";

const IdeaSubmission = () => {
  const timeLeft = "9:58";

  return (
    <div className="content">
      <div className="content-container">
        <div className="content-container">
          <h3>What do you want to do?</h3>
        </div>
        <div className="content-container flex-container">
          <div className="flex-component flex-70 flex-container">
            <div className="flex-compoment flex-70">
              <input placeholder="Play chess"></input>
            </div>
            <div className="flex-compoment flex-30 flex-start">
              <svg className="h-6 w-6 icon blue-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
          <div className="flex-component flex-30 flex-end">
            <button>Send</button>
          </div>
        </div>
        <div className="content-container flex-container">
          <div className="flex-component flex-30 flex-container">
            <div className="flex-component flex-70">
              <IncludeName />
              <Info />
            </div>
          </div>
          <div className="flex-component flex-70 flex-end">
            <p>
              <b>Time left:</b> {timeLeft}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaSubmission;
