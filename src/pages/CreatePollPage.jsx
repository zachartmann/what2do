import React, { useState } from "react";

import Header from "../components/Header";
import IncludeName from "../components/IncludeName";
import Info from "../components/Info";

const CreatePollPage = () => {

  const templates = ["what2do", "what2play", "where2go"]
  const times = ["10 min", "30 min", "1 hour", "2 hours", "4 hours", "6 hours", "12 hours",
                 "1 day", "2 days", "3 days", "5 days", "10 days", "1 week", "2 weeks"]
  const placeholders = {
    "what2do": "What should we do?",
    "what2play": "What should we play?",
    "where2go": "Where should we go?"
  }

  const [selectedTemplate, setSelectedTemplate] = useState("what2do");

  const changeTemplate = (event) => {
    setSelectedTemplate(event.target.value);
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="content-container">
          <div className="content-container">
            <h3>What do you want to ask?</h3>
          </div>
          <div className="content-container">
            <select name="template" id="template" value={selectedTemplate} onChange={changeTemplate}>
              {templates.map(template => {
                return <option key={template} value={template}>{template}</option>
              })}
            </select>
          </div>
          <div className="content-container">
            <p>Question</p>
          </div>
          <div className="content-container">
            <input placeholder={placeholders[selectedTemplate]}/>
          </div>
          <div className="content-container">
            <select name="template" id="template" defaultValue="1 day">
              {times.map(time => {
                return <option key={time} value={time}>{time}</option>
              })}
            </select>
          </div>
          <div className="content-container flex-container">
            <div className="flex-component flex-70">
              <IncludeName />
              <Info text="Give us your details." />
            </div>
            <div className="flex-component flex-30 flex-end">
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePollPage;
