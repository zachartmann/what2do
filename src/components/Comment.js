import React from "react";

const Comment = ({ commentInput, deleteComment }) => {
  return (
    <div className="content-container comment">
      <div className="content-container">
          Comment: {commentInput}
          <br />
          User Account: Juanita
      </div>
      <div className="content-container">
        <button
          className="delete-button"
          onClick={() => deleteComment(commentInput)}
        >
          Delete
        </button>
      </div>
      <br />
    </div>
  );
};

export default Comment;
