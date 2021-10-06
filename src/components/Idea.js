import React, { useState } from "react";
import { formatDistanceStrict } from "date-fns";

import "./Idea.css";

import CommentBox from "./CommentBox";
import VotingMechanism from "./Voting.js";

const Idea = ({ idea }) => {
  // Comment
  // -  Stroke .blue-icon
  // -  Fill white if not showing comments, otherwise lightskyblue

  const dummyUser = {
    //Dummy user for testing voting mechanism
    name: "Kevin",
    password: "B",
    _id: "615689f3c7568fc6aeff8074",
  };

  const postIdeaToDb = ({ props }) => {
    alert(
      `Updated upvoterList ${props.upVoters}\n Updated downvoterList ${props.downVoters}`
    );
  };

  const [hidden, setHidden] = useState(true);
  const [commentCount, setCommentCount] = useState(0);
  const {
    content,
    upVotes,
    downVotes,
    upVoters,
    downVoters,
    pinned,
    user,
    lastModified,
    createdAt,
  } = idea;
  let metaLabel;

  if (lastModified) {
    const lastModifiedDate = new Date(lastModified);
    metaLabel = `Edited ${formatDistanceStrict(
      lastModifiedDate,
      new Date()
    )} ago`;
  } else if (createdAt) {
    const createdAtDate = new Date(createdAt);
    metaLabel = `Created ${formatDistanceStrict(
      createdAtDate,
      new Date()
    )} ago`;
  } else {
    metaLabel = "Unknown time created";
  }

  const incrementCommentCount = () => {
    setCommentCount(commentCount + 1);
  };

  const decrementCommentCount = () => {
    setCommentCount(commentCount - 1);
  };

  const toggleComments = () => {
    setHidden(!hidden);
  };
  const commentFill = hidden ? "white" : "lightskyblue";
  return (
    <div className="content">
      <div className="content-container idea">
        <div
          className="content-container flex-container"
          style={{ paddingBottom: "0px" }}
        >
          <div className="flex-component flex-70">
            <h3>{content}</h3>
          </div>
          <VotingMechanism
            idea={idea}
            user={dummyUser}
            postIdeaToDb={postIdeaToDb()}
          />
        </div>
        <div className="content-container flex-container">
          <div className="flex-component flex-70 flex-between">
            <p className="small top idea-small-details">{user || "Anon"}</p>
            <p className="x-small top idea-small-details idea-meta-label">
              {metaLabel}
            </p>
          </div>
          <div className="flex-component flex-70 flex-end">
            {pinned ? (
              <svg
                className="h-6 w-6 icon blue-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="lightskyblue"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : null}
            <svg
              onClick={toggleComments}
              className="h-6 w-6 icon blue-icon comment-icon button-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill={commentFill}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <p className="top" style={{ paddingLeft: "7px" }}>
              {commentCount}
            </p>
          </div>
        </div>
        <div className="content-container">
          <CommentBox
            hidden={hidden}
            commentCount={commentCount}
            increment={incrementCommentCount}
            decrement={decrementCommentCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Idea;
