import React from "react";

import Comment from "./Comment";

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
