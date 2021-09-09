import React from "react";
import {
  useParams
} from "react-router-dom";

import Header from "../components/Header";
import IdeaSubmission from "../components/IdeaSubmission";
import Ideas from "../components/Ideas";
import Comment from "../components/Comment";

const PollPage = () => {

  // This gets the pollID from the URL and attempts to find a corresponding ID in the DB
  let { pollId } = useParams();

  if (pollId.length !== 6) {
    return <h1>Could not find poll with ID = {pollId} </h1>
  }

  return (
    <div className="App">
      <Header pollId={pollId} />
      <IdeaSubmission />
      {/* Sorting */}
      <Ideas />
      {/* Display config in Comment.js for Comment section */}
      <Comment />
    </div>
  );
};

export default PollPage;
