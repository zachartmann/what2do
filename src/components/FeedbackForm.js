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
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row no-gutters">
                <div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3 class="mb-4">Send us feedback!</h3>
                    <div id="form-message-warning" class="mb-4"></div>
                    <div id="form-message-success" class="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      id="feedbackForm"
                      name="feedbackForm"
                      class="contactForm"
                    >
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" for="#">
                              Message
                            </label>
                            <textarea
                              onChange={(e) => setFeedback(e.target.value)}
                              name="content"
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="5"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              class="btn btn-primary"
                            ></input>
                            <div class="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-4 col-md-5 d-flex align-items-stretch">
                  <div class="info-wrap bg-primary w-100 p-md-5 p-4">
                    <h3>What2Do Polls</h3>
                    <p class="mb-4">
                      We're open for any suggestions or feedback!
                    </p>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="text pl-3">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:info@yoursite.com">
                            info@yoursite.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="text pl-3">
                        <p>
                          <span>Website</span> <a href="#">what2do.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
