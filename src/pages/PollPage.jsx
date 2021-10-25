import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../components/Header";
import IdeaSubmission from "../components/IdeaSubmission";
import Ideas from "../components/Ideas";
import Footer from "../components/Footer";
import { getPoll } from "../common/requests/Poll";
import { getIdeas } from "../common/requests/Idea";
import { Context } from "../App";

const PollPage = () => {
  // This gets the pollID from the URL and attempts to find a corresponding ID in the DB
  let { pollId } = useParams();
  const [poll, setPoll] = useState(null);
  const [ideas, setIdeas] = useState(null);
  const validPoll = pollId.length === 6;
  const context = useContext(Context);
  const { socket } = context;

  if (socket) {
    console.log("Client is listening to socket");
    console.log(socket);

    socket.on("refresh", async () => {
      try {
        const ideaIds = await getPoll(pollId).data.ideaIds;
        const updatedIdeas = await getIdeas(ideaIds).data;
        setIdeas(updatedIdeas);
      } catch (err) {
        console.log("Real time updates failed"); // Chrome/FF inspector to see console
      }
    });
  }

  // Fetch data from the API poll endpoint using our poll ID
  async function fetchData(pollId) {
    const poll = await getPoll(pollId);
    console.log(poll.data); // Chrome/FF inspector to see console
    setPoll(poll.data);
    if (poll.data && poll.data.ideaIds && poll.data.ideaIds.length > 0) {
      // Fetch ideas from the API poll endpoint using our fetched poll
      const ideas = await getIdeas(poll.data.ideaIds);
      console.log(ideas.data); // Chrome/FF inspector to see console
      setIdeas(ideas.data);
    }
  }

  useEffect(() => {
    if (validPoll) {
      fetchData(pollId);
    }
  }, []);

  // Current stub

  if (!validPoll) {
    return <h1>Could not find poll with ID = {pollId} </h1>;
  }

  return (
    <div className="App">
      <Header pollId={pollId} />
      {poll && <IdeaSubmission poll={poll} />}
      {ideas && <Ideas ideas={ideas} />}
      {!poll && !ideas && (
        <div className="content-container">
          <p className="centered">Unfortunately there's no poll here</p>
          <Link to="/" className="content-container centered">
            Click here to head back
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PollPage;
