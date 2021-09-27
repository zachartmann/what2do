import React, { useState } from "react";

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

  let classes = "content-component";
  if (hidden) {
    classes += " hidden";
  }

  return (
    <div className={classes}>
      <CommentSubmission handleComment={handleComment} />
      <Comments comments={comments} deleteComment={deleteComment} />
    </div>
  );
};

export default CommentBox;
