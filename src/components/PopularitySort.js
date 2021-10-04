import React from "react";
import { useState, useMemo } from "react";

import Articles from "../components/Articles.js";

const PopularitySort = ({ articles }) => {
  const [sort, setSort] = useState(1);

  const newArticles = useMemo(() => {
    if (sort === 2) {
      return articles.sort((a, b) =>
        a.date < b.date ? 1 : b.date < a.date ? -1 : 0
      );
    }
  }, [articles, sort]);

  return (
    <div className="content">
      <div classname="thisclass">
        <button> Popularity </button>
        <button> Recency </button>
        <button data-testid="most-upvoted-link" onClick={() => setSort(1)}>
          Most Upvoted
        </button>
        <button data-testid="most-recent-link" onClick={() => setSort(2)}>
          Most Recent
        </button>
      </div>
      <div>
        <Articles articles={newArticles} />
      </div>
    </div>
  );
};

export default PopularitySort;
