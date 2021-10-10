import React, { useEffect, useState } from "react";

import Comment from "./Comment";
import { getComment } from "../common/requests/Comment";

// This is the Comments component and is used to map the comment and the Index and returns the Comment Component
const Comments = ({ commentIds, deleteComment }) => {
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    let comments = commentIds.map(async (id) => {
      return await getComment(id);
    });
    await Promise.all(comments).then((comments) => {
      setComments(comments);
    });
  }, []);

  if (commentIds.length === 0) {
    return <></>;
  }

  return (
    <>
      {comments.map((comment, index) => {
        console.log("Comment:", comment);
        return (
          <Comment
            key={index}
            id={comment.data._id}
            user={comment.data.user}
            commentText={comment.data.comment}
            deleteComment={deleteComment}
          />
        );
      })}
    </>
  );
};

export default Comments;
