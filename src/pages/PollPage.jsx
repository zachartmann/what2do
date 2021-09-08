import React from "react";
import {
  useParams
} from "react-router-dom";

import Header from "../components/Header";
import IdeaSubmission from "../components/IdeaSubmission";
import Ideas from "../components/Ideas";

const PollPage = () => {

  // This gets the pollID from the URL and attempts to find a corresponding ID in the DB
  let { pollId } = useParams();

  if (pollId.length !== 6) {
    return <h1>Could not find poll with ID = {pollId} </h1>
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <IdeaSubmission />
      </div>
      <div className="content">
        {/* Sorting */}
        <Ideas />
      </div>
      <div className="content">
        <p style={{ color: "red" }}>Buy me a coffee! &gt;:(</p>
      </div>
      </div>
  );
};

export default PollPage;
