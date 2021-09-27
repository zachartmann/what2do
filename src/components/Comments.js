import React from "react";

import Comment from "./Comment";

const Comments = ({ comments, deleteComment }) => {
  return (
    <>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.commentInput}
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
