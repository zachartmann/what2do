import React, { useState } from "react";

// The CommentBox component contains the logic to set the Comment functionality up for the user to enter in the comment text
// This component also contains the logic to delete the Comment that has been written and links to the Delete button usng the 'deleteComment'
// The increment and decrement functionality have also been included in this component and is used to increase and decrease the comment count displayed for each idea

import "./CommentBox.css";

import { deleteComment } from "../common/requests/Comment";

import CommentSubmission from "../components/CommentSubmission";
import Comments from "../components/Comments.js";

const CommentBox = ({
  hidden,
  initialCommentIds,
  increment,
  decrement,
  updateIdeaCommentIds,
}) => {
  const [commentIds, setCommentIds] = useState(initialCommentIds);
  const [comments, setComments] = useState([]);

  const handleComment = (commentText, user) => {
    let tmpComment = {
      comment: commentText,
      user: user,
    };

    setComments(comments.concat(tmpComment));
  };

  const handleDelete = async (commentId) => {
    const newCommentIds = commentIds.filter((id) => {
      return id !== commentId;
    });

    updateIdeaCommentIds(newCommentIds);
    setCommentIds(newCommentIds);
  };

  const handleSubmit = (id) => {
    updateIdeaCommentIds([...commentIds, id]);
    setCommentIds([...commentIds, id]);
    increment();
    window.location.reload();
  };

  let classes = "content-container";
  let commentBoxStyle = {};
  if (hidden) {
    classes += " hidden";
    commentBoxStyle["height"] = 0;
  }

  return (
    <div className={classes} style={commentBoxStyle}>
      <CommentSubmission
        handleComment={handleComment}
        handleSubmit={handleSubmit}
      />
      <Comments commentIds={commentIds} deleteComment={handleDelete} />
    </div>
  );
};

export default CommentBox;
