import React from "react";
import { useState } from "react";

import IncludeName from "./IncludeName";
import Info from "./Info";
import IdeaInput from "./IdeaInput";

const IdeaSubmission = ({ timeLeft }) => {
  const [idea, setIdea] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const handleSendIdea = () => {
    if (idea) {
      alert(idea);
    } else {
      alert(placeholder);
    }
  };

  return (
    <div className="content">
      <div className="content-container">
        <div className="content-container">
          <h3>What do you want to do?</h3>
        </div>
        <div className="content-container flex-container">
          <div className="flex-component flex-70 flex-container">
            <IdeaInput setIdea={setIdea} setPlaceholder={setPlaceholder} />
          </div>
          <div className="flex-component flex-30 flex-end">
            <button onClick={handleSendIdea}>Send</button>
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
