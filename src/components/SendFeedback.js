import React, { useState } from "react";

import FeedbackPopup from "./FeedbackPopup";

const handleClick = (evt) => {
  evt.preventDefault();
  alert(`Clicked send feedback`);
};

const SendFeedback = () => {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Send Feedback
      </button>
      <FeedbackPopup hidden={hidden} />
    </>
  );
};

export default SendFeedback;
