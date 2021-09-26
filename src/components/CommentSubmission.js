import React, { useState } from "react";

const CommentSubmission = ({ handleComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleChange = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <div className="Commentoverall">
      <br />

      <br />
      <div className="content-component">
        <textarea
          id="stylecomment"
          rows="3"
          cols="52"
          placeholder="Enter your comment for the idea"
          maxlength="145"
          value={commentText}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            if (commentText !== "") {
              handleComment(commentText);
              setCommentText("");
            }
          }}
        >
          Add comment
        </button>
      </div>
    </div>
  );
};

export default CommentSubmission;
