import React from "react";

const Template = ({ title }) => {
  return <button className="template-selection">{title}</button>;
};

const CreatePollPage = () => {
  return (
    <div className="App">
      <h1>Create Poll</h1>
      <p>Templates</p>
      <div>
        <Template title="what2do" />
        <Template title="what2play" />
        <Template title="where2go" />
      </div>

      <br />
      <div className="poll-details">
        <input className="poll-detail" placeholder="Topic" />
        <br />
        <input className="poll-detail" placeholder="Name (optional)" />
        <br />
        <input className="poll-detail" placeholder="Time limit (optional)" />
        <br />
      </div>
    </div>
  );
};

export default CreatePollPage;
