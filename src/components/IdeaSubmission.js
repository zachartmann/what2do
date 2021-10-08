import React, { useEffect, useState } from "react";
import { postIdea } from "../common/requests/Idea";
import IncludeName from "./IncludeName";
import Info from "./Info";
import IdeaInput from "./IdeaInput";
import {
  differenceInSeconds,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import { getSuggestions } from "../common/requests/Suggestion";

// Get the time left from current time to poll end date and format it
function getTimeLeft(endDate, currentDate) {
  let timeLeft;
  const seconds = differenceInSeconds(endDate, currentDate);
  if (seconds <= 0) {
    return "Expired";
  }

  const longerThanHour = hours >= 1;
  const hours = `${Math.abs(
    differenceInHours(endDate, currentDate, {
      roundingMethod: "floor",
    })
  )}`.padStart(2, "0");
  const minutesLeft = `${Math.abs(
    differenceInMinutes(endDate, currentDate) % 60
  )}`.padStart(2, "0");
  const secondsLeft = `${Math.abs(seconds % 60)}`.padStart(2, "0");

  if (longerThanHour) {
    timeLeft = `${hours}:${minutesLeft} HR`;
  } else {
    timeLeft = `${minutesLeft}:${secondsLeft} MIN`;
  }

  return timeLeft;
}

const IdeaSubmission = ({ poll }) => {
  const endDate = new Date(poll.endDate);
  const currentDate = new Date();
  const [idea, setIdea] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(endDate, currentDate));
  const [suggestions, setSuggestions] = useState(null);

  async function fetchSuggestions() {
    //Fetches all suggestions that will be passed to the placeholder
    const fetchedSuggestions = await getSuggestions();
    setSuggestions(fetchedSuggestions.data);
  }

  useEffect(() => {
    //Triggers on page load
    fetchSuggestions();
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(getTimeLeft(endDate, new Date()));
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [timeLeft]);

  const handleIdeaSubmission = async () => {
    const user = localStorage.getItem("user");

    if (idea) {
      await postIdea(poll._id, idea, 0, 0, false, user);
    } else {
      await postIdea(poll._id, placeholder, 0, 0, false, user);
    }
    window.location.reload();
    console.log(`Idea submitted by user: ${user}`);
  };

  return (
    <div className="content">
      <div className="content-container idea">
        {" "}
        {/* TODO: fix idea class name */}
        <div className="content-container">
          <h3>{poll.title}</h3>
        </div>
        <div className="content-container flex-container">
          <div className="flex-component flex-70 flex-container">
            <IdeaInput
              setIdea={setIdea}
              setPlaceholder={setPlaceholder}
              suggestions={suggestions}
            />
          </div>
          <div className="flex-component flex-30 flex-end">
            <button onClick={handleIdeaSubmission}>Send</button>
          </div>
        </div>
        <div className="content-container flex-container">
          <div className="flex-component flex-30 flex-container">
            <div className="flex-component flex-70">
              <IncludeName />
              <Info />
            </div>
          </div>
          <div className="flex-component flex-70 centered flex-end">
            <p>
              <b>Time left:</b>
              <br />
              {timeLeft}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaSubmission;
