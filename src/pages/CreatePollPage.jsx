import React from "react";

import Header from "../components/Header";
import PollSubmission from "../components/PollSubmission";

const CreatePollPage = () => {
  return (
    <div className="App">
      <Header pollId="" />
      <PollSubmission />
    </div>
  );
};

export default CreatePollPage;
