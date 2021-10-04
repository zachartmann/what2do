import React from "react";

const FeedbackPopup = ({ hidden }) => {
  let topClasses = "content popup feedback-popup";
  if (hidden) {
    topClasses += " hidden";
  }

  return (
    <div className={topClasses}>
      <div className="content-container">
        <div className="content-container center">
          <h3>Submit Feedback</h3>
        </div>
        <div className="content-container">
          <input placeholder="Your feedback/suggestion"></input>
        </div>
        <div className="flex-container">
          <div className="flex-component flex-70 flex-end">
            <button type="button">Confirm</button>
          </div>
          <div style={{ width: "10px" }}></div>
          <div className="flex-component flex-30">
            <button type="button" className="inverted-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;
