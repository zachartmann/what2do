import React, { useState, useEffect } from "react";
//import PopularitySort from "./PopularitySort";

const PopularityReferences = ({}) => {
  const sortideas = [
    {
      id: 1,
      title: "This is a test sorting idea",
      upvotes: 12,
      formed: 2021,
    },
    {
      id: 2,
      title: "Another test",
      upvotes: 13,
      formed: 2020,
    },
  ];

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("upvotes");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        upvotes: "upvotes",
        formed: "date",
      };
      const sortProperty = types[type];
      const sorted = [...sortideas].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="pending">
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="upvotes">Upvotes</option>
        <option value="formed">Formed in</option>
      </select>

      {data.map((popularity) => (
        <div key={popularity.id} style={{ margin: "30px" }}>
          <div>{`Idea: ${popularity.title}`}</div>
          <div>{`Upvotes: ${popularity.upvotes}`}</div>
          <div>{`Date of creation: ${popularity.formed}`}</div>
        </div>
      ))}
    </div>
  );
};

export default PopularityReferences;
