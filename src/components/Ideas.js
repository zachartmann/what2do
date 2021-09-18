import React from "react";

import Idea from "./Idea"

const Ideas = () => {

  // content: String,
  // upVotes: Number, 
  // downVotes: Number, 
  // upVoters: [User],
  // downVoters: [User],
  // pinned: Boolean,
  // user: String

  const ideas = [
    {
      content: "Let's play vidya gam",
      upVotes: 1,
      downVotes: 2,
      upVoters: [
        {
          name: "Zac",
          password: ""
        }
      ],
      downVoters: [
        {
          name: "Sean",
          password: "1234"
        },
        {
          name: "Mikael",
          password: ""
        }
      ],
      pinned: false,
      user: "Zac"
    },
    {
      content: "Let's go to the zoo",
      upVotes: 90,
      downVotes: 23,
      upVoters: [
        // All anonymous
      ],
      downVoters: [
        {
          name: "Zoo-hater",
          password: ""
        }
      ],
      pinned: true,
      user: ""
    }
  ]
  return (
    <>
      {ideas.map((idea, index) => {
        return <Idea key={index} idea={idea} />
      })}
    </>
  )
}

export default Ideas;