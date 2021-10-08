import React, { useState } from "react";

// This is the Comment Submission component runs the handle change functions for the Comment Text and setting the target value which is the user input

const CommentSubmission = ({ handleComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleClick = () => {
    if (commentText !== "") {
      handleComment(commentText);
      setCommentText("");
    }
  };

  return (
    <div className="content-container">
      <textarea
        className="comment-textarea"
        rows="3"
        placeholder="Enter your comment for the idea"
        value={commentText}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add comment</button>
    </div>
  );
};

export default CommentSubmission;
