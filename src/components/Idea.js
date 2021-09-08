import React from "react";

const Idea = ({ idea }) => {
  const comments = idea.comments
  return (
    <div>
      <p>{idea}</p>
      {/* {comments.map(comment => {
        return <Comment
                  text={comment.text}
                  downvotes={comment.downvotes}
                  upvotes={comment.upvotes}
                />

      })} */}
    </div>
  )
}

export default Idea;