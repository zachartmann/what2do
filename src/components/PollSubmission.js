import React, { useEffect, useState } from "react";
import IncludeName from "../components/IncludeName";
import Info from "../components/Info";
import { postPoll } from "../common/requests/Poll";
import { getTemplate, getTemplates } from "../common/requests/Template";

const PollSubmission = () => {
  const [question, setQuestion] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("None");
  const [selectedDuration, setSelectedDuration] = useState("60"); // in minutes
  const [templates, setTemplates] = useState([]);

  // Fetch data from the API
  useEffect(async () => {
    const templates = await getTemplates();
    setTemplates(templates.data);
  }, []);

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
  let placeholders = { None: "Enter a question!" };
  let ids = {};
  templates.forEach((template) => {
    placeholders[template.category] = template.title;
    ids[template.category] = template._id;
  });

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

    const alertMessage = (question) => {
      return `Submitting ${pollId}\nTemplate: ${selectedTemplate}\nQuestion: ${question}\nDuration: ${selectedDuration}\nEnd: ${new Date(
        new Date().getTime() + selectedDuration * 60000
      )}`;
    };

    if (question === "" && selectedTemplate === "None") {
      alert("Please enter a question for the poll.");
      return;
    }

    const pollId = generatePollId();

    if (selectedTemplate === "None") {
      // Create a normal poll as usual
      alert(alertMessage(question));

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

      alert(alertMessage(tmpQuestion));

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
              {Object.keys(placeholders).map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
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
