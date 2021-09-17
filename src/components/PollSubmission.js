import React, { useState } from "react";
import IncludeName from "../components/IncludeName";
import Info from "../components/Info";

const PollSubmission = (props) => {
  const [question, setQuestion] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("what2do");
  const templates = ["what2do", "what2play", "where2go"];
  const times = [
    "10 min",
    "30 min",
    "1 hour",
    "2 hours",
    "4 hours",
    "6 hours",
    "12 hours",
    "1 day",
    "2 days",
    "3 days",
    "5 days",
    "10 days",
    "1 week",
    "2 weeks",
  ];
  const placeholders = {
    what2do: "What should we do?",
    what2play: "What should we play?",
    where2go: "Where should we go?",
  };

  const changeTemplate = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Question ${question}`);
  };

  return (
    <div className="content">
      <div className="content-container">
        <div className="content-container">
          <h3>What do you wantasdfasdf to ask?</h3>
        </div>
        <form onSubmit={this.onSubmit}>
        <div className="content-container">
            <select
              name="template"
              id="template"
              value={selectedTemplate}
              onChange={changeTemplate}
            >
              {templates.map((template) => {
                return (
                  <option key={template} value={template}>
                    {template}
                  </option>
                );
              })}
            </select>
        </div>
        <div className="content-container">
          <p>Question</p>
        </div>
        <div className="content-container">
          <input
            placeholder={placeholders[selectedTemplate]}
            onChange={e => setQuestion(e.target.value)}
        />
        </div>
        <div className="content-container">
          <select name="template" id="template" defaultValue="1 day">
            {times.map((time) => {
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
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
        </form>

      </div>
    </div>
  );
};

export default PollSubmission;
