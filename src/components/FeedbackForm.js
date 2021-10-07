import React, { useState } from "react";
import { postFeedback } from "../common/requests/Feedback";
import "./FeedbackForm.css";

const FeedbackForm = (props) => {
  const [feedbackContent, setFeedback] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting form with this feedback`);
    postFeedback(feedbackContent);
  };
  return (
    <div className="content feedback-box">
      <div className="flex-container">
        <div className="flex-container flex-30 feedback-contact">
          <div className="content-container">
            <h3>What2Do Polls</h3>
            <p>We're open for any suggestions or feedback!</p>
            <div className="content-container">
              <p>
                <span>Email: </span>
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
            <div className="content-container">
              <p>
                <span>Website: </span>
                <a href="#">what2do.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-container flex-70">
          <div className="content-container feedback">
            <div className="content-container">
              <h1>Send us feedback!</h1>
              <h5>MESSAGE</h5>
            </div>
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="content-container">
                <textarea
                  className="feedback-message"
                  cols="30"
                  name="content"
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Message"
                  rows="5"
                ></textarea>
                <button type="submit" className="submit-feedback">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
