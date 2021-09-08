import React from "react";
import {
  useParams
} from "react-router-dom";

const Topic = ({ title }) => {
  return <h1>{title}</h1>;
};

const PollPage = () => {

  let { pollId } = useParams();

  if (pollId.length !== 6) {
    return <h1>Could not find poll with ID = {pollId} </h1>
  }

  return (
    <div className="App">
      <Topic title={pollId} />
      <p>Poll deadline</p>
      <p style={{ color: "red" }}>Buy me a coffee! &gt;:(</p>
    </div>
  );
};

export default PollPage;
