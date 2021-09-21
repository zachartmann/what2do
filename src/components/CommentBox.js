import React, { useState } from "react";

function Card(props) {
  return (
    <div className="Card">
      <div className="Cardstyling">
      Comment: {props.comment}
      </div>
      <div className="makinganewclass">
      <button id="buttonid" onClick={() => props.delete(props.comment)}>Delete</button>
      </div>
      <br />
    </div>
  );
}

export default function App() {
  const [sim, setSim] = useState([]);
  const [components, setComponents] = useState({
    comment: "",
    name: "",
  });

  const handleComment = () => {
    const temp = [
      ...sim,
      {
        comment: components.comment
      }
    ];
    setSim(temp);
    setComponents({ comment: "" });
  };

  const del = (comment) => {
    console.log(comment, "deleted");
    const newArr = sim.filter((element) => {
      return element.comment !== comment;
    });
    setSim(newArr);
  };

  return (
    <div className="App">
      <br />

      <br />
      <textarea id="stylecomment"
        rows="3"
        cols="52"
        input placeholder="Enter your comment for the idea"
        maxlength="145"
        value={components.comment}
        onChange={(event) => {
          const temp = {
            ...components,
            comment: event.target.value
          };
          setComponents(temp);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          handleComment();
        }}
      >
        Add comment
      </button>
      {sim.map((element) => {
        return (
          <Card
            comment={element.comment}
            delete={del}
          />
        );
      })}
    </div>
  );
}
