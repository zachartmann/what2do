import React, { useState } from "react";

import CommentBox from "./CommentBox";
import VotingMechanism from "./Voting.js";

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
  const [dummyUser, setDummyUser] = useState("Zac");
  const [hidden, setHidden] = useState(true);
  const [commentCount, setCommentCount] = useState(0);

  const incrementCommentCount = () => {
    setCommentCount(commentCount + 1);
  }

  const decrementCommentCount = () => {
    setCommentCount(commentCount - 1);
  }

  const toggleComments = () => {
    setHidden(!hidden);
  }

  const commentFill = hidden ? "white" : "lightskyblue";
  return (
    <div className="content">
      <div className="content-container idea">
        <div className="content-container flex-container" style={{ paddingBottom: "0px" }}>
          <div className="flex-component flex-70">
            <h3>{idea.content}</h3>
          </div>
          <VotingMechanism idea={idea} user={dummyUser} />
        </div>
        <div className="content-container flex-container">
          <div className="flex-component flex-70 flex-between">
            <p className="small top idea-small-details">{idea.user || "Anon"}</p>
            <p className="small top idea-small-details">1 minute ago</p>
          </div>
          <div className="flex-component flex-70 flex-end">
            {idea.pinned
              ? <svg class="h-6 w-6 icon blue-icon" xmlns="http://www.w3.org/2000/svg" fill="lightskyblue" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              : null
            }
            <svg onClick={toggleComments} className="h-6 w-6 icon blue-icon comment-icon" xmlns="http://www.w3.org/2000/svg" fill={commentFill} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <p className="top" style={{ paddingLeft: "7px" }}>{commentCount}</p>
          </div>
        </div>
        <div className="content-container">
          <CommentBox
            hidden={hidden}
            commentCount={commentCount}
            increment={incrementCommentCount}
            decrement={decrementCommentCount} />
        </div>
      </div>
    </div>
  )
}

export default Idea;