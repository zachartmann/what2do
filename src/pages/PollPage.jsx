import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import IdeaSubmission from "../components/IdeaSubmission";
import Ideas from "../components/Ideas";
import Footer from "../components/Footer";
import { getPoll } from "../common/requests/Poll";

const PollPage = () => {
  // This gets the pollID from the URL and attempts to find a corresponding ID in the DB
  let { pollId } = useParams();
  const [poll, setPoll] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");
  const validPoll = pollId.length === 6;

  useEffect(() => {
    if (validPoll) {
      setPoll(getPoll(pollId));
      // setTimeLeft(getPoll(pollId));
    }
  });

  // Current stub

  if (!validPoll) {
    return <h1>Could not find poll with ID = {pollId} </h1>;
  }

  return (
    <div className="App">
      <Header pollId={pollId} />
      <IdeaSubmission timeLeft={timeLeft} />
      {/* Sorting */}
      <Ideas />
      <div className="content">
        <Footer />
      </div>
      <div style={{ backgroundColor: "white", height: "100px" }}></div>
    </div>
  );
};

export default PollPage;
