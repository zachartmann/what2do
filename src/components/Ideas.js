import React from "react";

import Idea from "./Idea";

const Ideas = ({ ideas }) => {
  // const ideas = [
  //   {
  //     content: "Let's play vidya gam",
  //     upVotes: 1,
  //     downVotes: 2,
  //     upVoters: [
  //       {
  //         name: "Zac",
  //         password: "",
  //       },
  //     ],
  //     downVoters: [
  //       {
  //         name: "Sean",
  //         password: "1234",
  //       },
  //       {
  //         name: "Mikael",
  //         password: "",
  //       },
  //     ],
  //     pinned: false,
  //     user: "Zac",
  //   },
  //   {
  //     content: "Let's go to the zoo",
  //     upVotes: 90,
  //     downVotes: 23,
  //     upVoters: [
  //       // All anonymous
  //     ],
  //     downVoters: [
  //       {
  //         name: "Zoo-hater",
  //         password: "",
  //       },
  //     ],
  //     pinned: true,
  //     user: "",
  //   },
  // ];

  let sortIdeas = (ideas) => {
    var pinnedIdeas = [];
    var unpinnedIdeas = [];
    ideas.forEach((idea) => {
      if (idea.pinned) {
        pinnedIdeas.push(idea);
      } else {
        unpinnedIdeas.push(idea);
      }
    });
    return pinnedIdeas.concat(unpinnedIdeas);
  };

  return (
    <>
      {sortIdeas(ideas).map((idea, index) => {
        return <Idea key={index} idea={idea} />;
      })}
    </>
  );
};

export default Ideas;
