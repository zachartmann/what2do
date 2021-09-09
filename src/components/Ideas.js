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
      pinned: true,
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
      pinned: false,
      user: ""
    }
  ]
  return (
    <>
      {ideas.map(idea => {
        return <Idea idea={idea} />
      })}
    </>
  )
}

export default Ideas;