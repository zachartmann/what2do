import React, { useState } from "react";
import { formatDistanceStrict } from "date-fns";

import CommentBox from "./CommentBox";

const Idea = ({ idea }) => {
  // Downvoted
  // -  Stroke red
  // -  Fill orangered? otherwise none

  // Upvoted
  // -  Stroke green
  // -  Fill lime otherwise none

  // Comment
  // -  Stroke .blue-icon
  // -  Fill white if not showing comments, otherwise lightskyblue

  // if (loggedInName in upVoters) {
  //   make it lime filled
  // }

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
          <div className="flex-component flex-30 flex-end flex-container">
            <div className="flex-component">
              <svg
                className="h-6 w-6 icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="orangered"
                viewBox="0 0 24 24"
                stroke="red"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                />
              </svg>
            </div>
            <div className="flex-component">
              <p className="big centered">{upVotes - downVotes}</p>
            </div>
            <div className="flex-component">
              <svg
                className="h-6 w-6 icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="lime"
                viewBox="0 0 24 24"
                stroke="green"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
          </div>
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
