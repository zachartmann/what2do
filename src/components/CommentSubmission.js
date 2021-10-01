import React, { useState } from "react";

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
        class="comment-textarea"
        rows="3"
        cols="50"
        placeholder="Enter your comment for the idea"
        maxlength="145"
        value={commentText}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add comment</button>
    </div>
  );
};

export default CommentSubmission;
