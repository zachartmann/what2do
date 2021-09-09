import React from "react";

import Idea from "./Idea"
/*import Comments from "../components/Comments";*/


/* const Comment = ({ text, downvotes, upvotes }) => { */
  const Comment = () => {
  /* return <p>Hello Testing that this is working yay</p> */

    const ideas = [
      {
      content: "Let's create an idea that has a comment box",
      upVotes: 100,
      downVotes: 2,
      upVoters: [
        {
          name: "Juanita",
          password: ""
        }
      ],
      downVoters: [
        {
          name: "Juanitaa",
          password: "1234"
        },
        {
          name: "Juanitaaa",
          password: ""
        }
      ],
      pinned: false,
      user: "Juanita"
    }
  ] 

  return (
    <><div className="content-container flex-container">
      <div className="flex-component flex-70 flex-container">
            <div className="flex-compoment flex-70">
              <input placeholder="Insert Comment"></input>
            </div>
          </div>
    </div><>
        {ideas.map(idea => {
          return <Idea idea={idea} />;
        })}
      </></>
  )
}     
   
export default Comment;