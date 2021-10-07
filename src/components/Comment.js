import React from "react";

// This comment component includes the delete Comment button which is used to delete the comment
// Component  also has the commentInput parsed in which is what is the contents that are intputed into the textbox

const Comment = ({ commentInput, deleteComment }) => {
  return (
    <div className="content-container comment">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 icon blue-icon button-icon icon-circle delete-icon"
        onClick={() => deleteComment(commentInput)}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
      <div className="content-container comment-details">
        <h3>{commentInput}</h3>
        <p className="small comment-small-details">
          {localStorage.getItem("user")
            ? localStorage.getItem("user")
            : "Anonymous"}{" "}
          {/* TODO: fix */}
        </p>
      </div>
      <br />
    </div>
  );
};

export default Comment;
