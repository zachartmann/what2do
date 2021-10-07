import React, { useState } from "react";
import IncludeName from "../components/IncludeName";
import Info from "../components/Info";
import { postPoll } from "../common/requests/Poll";
import { getTemplate } from "../common/requests/Template";

const PollSubmission = () => {
  const [question, setQuestion] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("None");
  const [selectedDuration, setSelectedDuration] = useState("60"); // in minutes
  const templates = ["None", "what2do", "what2play", "where2go", "what2eat"];
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
  const timesTemp = ["10", "30", "60"];
  const placeholders = {
    None: "Enter a question!",
    what2do: "What should we do?",
    what2play: "What should we play?",
    where2go: "Where should we go?",
    what2eat: "What should we eat?",
  };
  // TODO: Need to search by category?
  const ids = {
    what2do: "615e38fee095d931404280f8",
    what2play: "615e4448bb366e7565cb7331",
    where2go: "615e4c2586336bc8129da5ad",
    what2eat: "615e4cbc86336bc8129da5b5",
  };

  const changeTemplate = (event) => {
    setSelectedTemplate(event.target.value);
  };

  function generatePollId() {
    let pollId = "";
    for (let i = 0; i < 6; i++) {
      pollId += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
    // TODO: check if poll ID already exists
    return pollId;
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (question === "" && selectedTemplate === "None") {
      alert("Please enter a question for the poll.");
      return;
    }

    const pollId = generatePollId();

    if (selectedTemplate === "None") {
      // Create a normal poll as usual
      alert(
        `Submitting ${pollId}\nTemplate: ${selectedTemplate}\nQuestion: ${question}\nDuration: ${selectedDuration}\nEnd: ${new Date(
          new Date().getTime() + selectedDuration * 60000
        )}`
      );

      postPoll(
        pollId,
        question,
        new Date().getTime() + selectedDuration * 60000,
        selectedDuration
      );
    } else {
      // Create a poll with details from the template
      const template = await getTemplate(ids[selectedTemplate]);
      const tmpQuestion = question === "" ? template.data.title : question;

      alert(
        `Submitting ${pollId}\nTemplate: ${selectedTemplate}\nQuestion: ${tmpQuestion}\nDuration: ${selectedDuration}\nEnd: ${new Date(
          new Date().getTime() + selectedDuration * 60000
        )}`
      );

      postPoll(
        pollId,
        tmpQuestion,
        new Date().getTime() + selectedDuration * 60000,
        selectedDuration,
        template.data.ideaIds
      );
    }
  };

  return (
    <div className="content">
      <div className="content-container">
        <div className="content-container">
          <h3>What do you want to ask?</h3>
        </div>
        <div className="content-container">
          <p>Template</p>
        </div>
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="content-container">
            <select
              name="template"
              id="template"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              {timesTemp.map((time) => {
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
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PollSubmission;
