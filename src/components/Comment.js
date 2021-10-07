import React from "react";

// This comment component includes the delete Comment button which is used to delete the comment
// Component  also has the commentInput parsed in which is what is the contents that are intputed into the textbox

const Comment = ({ commentInput, deleteComment }) => {
  return (
    <div className="content-container comment">
      <div className="content-container">
        Comment: {commentInput}
        <br />
        User Account: Juanita
      </div>
      <div className="content-container trimmed">
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
