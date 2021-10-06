import React, { useState } from "react";

import "./Ideas.css";

import Idea from "./Idea";

const Ideas = ({ ideas }) => {
  const [sortType, setSortType] = useState("");

  const sortPinnedIdeas = (ideas) => {
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

  const sortIdeas = (ideas) => {
    // Some sorting - Popularity(upVotes - downVotes) / Recency(createdAt)

    let tmpIdeas = ideas;

    if (sortType == "createdAt") {
      // Sort dates by lexigraphic compare
      tmpIdeas = [...ideas].sort((a, b) =>
        b[sortType] < a[sortType] ? -1 : b[sortType] > a[sortType] ? 1 : 0
      );
    } else if (sortType == "upVotes") {
      // Sort upvotes numerically
      tmpIdeas = [...ideas].sort((a, b) => {
        let bValue = b["upVotes"] - b["downVotes"];
        let aValue = a["upVotes"] - a["downVotes"];
        return bValue - aValue;
      });
    }

    return sortPinnedIdeas(tmpIdeas);
  };

  return (
    <>
      <div className="content sort-box">
        <div className="flex-container flex-end">
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="upVotes">Upvotes</option>
            <option value="createdAt">Created At</option>
          </select>
        </div>
      </div>
      {sortIdeas(ideas).map((idea, index) => {
        return <Idea key={index} idea={idea} />;
      })}
    </>
  );
};

export default Ideas;
