import React from "react";

import Comment from "./Comment"

/* const Comment = ({ text, downvotes, upvotes }) => { */
  const Comments = () => {

    // Comment: String
    // User: String 

    const comments = [
      {
      commentInput: "This is a persons comments",
      user: "Juanita",
    }
  ]

  return (
    <>
      {comments.map(comment => {
        return <Comment comment={comment} />;
      })}
    </>
  )
}     
   
export default Comments;