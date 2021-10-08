import React from "react";

import Comment from "./Comment";

// This is the Comments component and is used to map the comment and the Index and returns the Comment Component

const Comments = ({ comments, deleteComment }) => {
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <Comment
            key={index}
            user={comment.user}
            commentInput={comment.commentInput}
            deleteComment={deleteComment}
          />
        );
      })}
    </>
  );
};

export default Comments;
