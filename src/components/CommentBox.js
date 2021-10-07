import React, { useState } from "react";

// The CommentBox component contains the logic to set the Comment functionality up for the user to enter in the comment text
// This component also contains the logic to delete the Comment that has been written and links to the Delete button usng the 'deleteComment'
// The increment and decrement functionality have also been included in this component and is used to increase and decrease the comment count displayed for each idea

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
