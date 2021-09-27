import React from "react";

const Comment = ({ commentInput, deleteComment }) => {
  return (
    <div className="Card">
      <div className="Cardstyling">
        Comment: {commentInput}
        <br></br>
        User Account: Juanita
      </div>
      <div className="makinganewclass">
        <button id="buttonid" onClick={() => deleteComment(commentInput)}>
          Delete
        </button>
      </div>
      <br />
    </div>
  );
};

export default Comment;
