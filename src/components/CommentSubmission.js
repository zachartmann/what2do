import React, { useState } from "react";

import { postComment } from "../common/requests/Comment";

// This is the Comment Submission component runs the handle change functions for the Comment Text and setting the target value which is the user input
// Furthemmore returns the comment container text box that has the placeholder that signifies to the user to enter a comment for the idea
// Following this when the Add comment button is clicked then the new comment is added to the idea

const CommentSubmission = ({ handleComment, handleSubmit }) => {
  const [commentText, setCommentText] = useState("");

  const handleChange = (event) => {
    setCommentText(event.target.value);
  };

  const submitComment = async () => {
    const user = localStorage.getItem("user") ?? "Anonymous";

    if (commentText !== "") {
      let id = await postComment(commentText, user).then((comment) => {
        handleComment(comment.data.commentText, comment.data.user);
        setCommentText("");

        return comment.data._id;
      });

      return id;
    }

    return "";
  };

  const handleClick = async () => {
    let id = await submitComment();
    handleSubmit(id);
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
