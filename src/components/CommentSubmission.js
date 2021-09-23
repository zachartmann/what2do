import React from "react";

import Comment from "./Comment"


/* const Comment = ({ text, downvotes, upvotes }) => { */
  const Comments = () => {

    const comments = [
      {
      commentInput: "This is a persons comments",
      user: "Juanitaa",
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