import React from "react";

const Comment = ({ comment }) => {

    return (
        <div className="content-container flex-container">
        <div className="flex-component flex-70 flex-container">
          <div className="flex-compoment flex-70">
            <input placeholder="Insert Comment"></input>
          </div>
        </div>
      </div>
    )  
}

export default Comment;