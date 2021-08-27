require("dotenv").config();
import React from "react";
import mongoose from "mongoose";
import "./App.css";
import CreatePollPage from "./components/CreatePollPage";

const Topic = ({ title }) => {
  return <h1>{title}</h1>;
};

const App = () => {
  const url = process.env.MONGODB_URI;
  await mongoose.connect(url); // may need to use createConnection

  const pollId = "AH32N4";
  if (pollId === "000000") {
    return <CreatePollPage />;
  } else {
    return (
      <div className="App">
        <Topic title={pollId} />
        <p>Poll deadline</p>
        <p style={{ color: "red" }}>Buy me a coffee! &gt;:(</p>
      </div>
    );
  }
};

export default App;