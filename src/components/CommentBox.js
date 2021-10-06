import React, { useState } from "react";

import "./CommentBox.css";

import CommentSubmission from "../components/CommentSubmission";
import Comments from "../components/Comments.js";

const CommentBox = ({ hidden, commentCount, increment, decrement }) => {
  // const [count, setCount] = useState(0);
  const [comments, setComments] = useState([]);

  const handleComment = (commentInput) => {
    const tmpComment = {
      commentInput: commentInput,
      user: "Juanitaa",
    };

    setComments(comments.concat(tmpComment));
    increment();
  };

  const deleteComment = (commentText) => {
    const newComments = comments.filter((comment) => {
      return comment.commentInput !== commentText;
    });

    setComments(newComments);
    decrement();
  };

  let classes = "content-container";
  let commentBoxStyle = {};
  if (hidden) {
    classes += " hidden";
    commentBoxStyle["height"] = 0;
  }

  return (
    <div className={classes} style={commentBoxStyle}>
      <CommentSubmission handleComment={handleComment} />
      <Comments comments={comments} deleteComment={deleteComment} />
    </div>
  );
};

export default CommentBox;
