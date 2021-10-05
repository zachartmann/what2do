import React from "react";

import "./Popups.css";

const InfoPopup = ({ hidden }) => {
  let topClasses = "content popup info-popup";
  if (hidden) {
    topClasses += " hidden";
  }

  return (
    <div className={topClasses}>
      <div className="content-container">
        <p>
          Logging in is not necessary to create a poll or respond to one. We use
          it to ensure continuity between sessions though, so we recommend using
          one.
        </p>
      </div>
    </div>
  );
};

export default InfoPopup;
