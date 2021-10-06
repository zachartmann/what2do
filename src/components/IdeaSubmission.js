import React, { useEffect } from "react";
import { useState } from "react";
import { postIdea } from "../common/requests/Idea";
import IncludeName from "./IncludeName";
import Info from "./Info";
import IdeaInput from "./IdeaInput";
import {
  differenceInSeconds,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

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

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(getTimeLeft(endDate, new Date()));
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [timeLeft]);

  const handleIdeaSubmission = () => {
    if (idea) {
      postIdea(poll._id, idea, 0, 0, false);
    } else {
      postIdea(poll._id, placeholder, 0, 0, false);
    }
  };

  return (
    <div className="content">
      <div className="content-container">
        <div className="content-container">
          <h3>What do you want to do?</h3>
        </div>
        <div className="content-container flex-container">
          <div className="flex-component flex-70 flex-container">
            <IdeaInput setIdea={setIdea} setPlaceholder={setPlaceholder} />
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
