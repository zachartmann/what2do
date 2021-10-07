import React, { useState } from "react";
import { formatDistanceStrict } from "date-fns";
import { updateIdea } from "../common/requests/Idea";

import Modal from "./Modal";
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
    _id,
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
  const [pinHidden, setPinHidden] = useState(!pinned);
  const [showEdit, setShowEdit] = useState(false);
  const [newIdeaText, setNewIdeaText] = useState("");
  // Create the 'edited/created at' tag that shows when last edited/created
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

  const handleMouseEnter = () => {
    setPinHidden(false);
  };

  const handleMouseLeave = () => {
    if (!pinned) setPinHidden(true);
  };

  const handlePinClick = (id) => {
    updateIdea(id, undefined, undefined, undefined, !pinned);
    window.location.reload();
  };

  const commentFill = hidden ? "white" : "lightskyblue";
  const pinFill = pinned ? "yellow" : "white";

  return (
    <div className="content">
      <div
        className="content-container idea"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!pinHidden && (
          <div style={{ height: 0 }} onClick={() => handlePinClick(_id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon blue-icon pin-icon"
              fill={pinFill}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
        )}
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
                className="h-6 w-6 icon upvote-icon"
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
            <div className="flex-component">
              <p className="big centered">{upVotes - downVotes}</p>
            </div>
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
            <svg
              style={{ paddingRight: "7px", paddingBottom: "15px" }}
              onClick={() => {
                setShowEdit(!showEdit);
              }}
              class="w-6 h-6"
              fill="none"
              width="24px"
              height="24px"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
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
          <Modal
            idea={idea}
            title="Edit Your Idea?"
            onClose={() => setShowEdit(false)}
            onSubmit={async () => {
              await updateIdea(_id, newIdeaText, upVotes, downVotes, pinned);
              window.location.reload();
            }}
            show={showEdit}
          >
            <textarea
              className="comment-textarea"
              rows="3"
              cols="50"
              placeholder="Enter your new idea"
              maxLength="145"
              value={newIdeaText}
              onChange={(event) => setNewIdeaText(event.target.value)}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Idea;
