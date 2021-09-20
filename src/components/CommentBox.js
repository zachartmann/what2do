import React, { useState } from "react";

function Card(props) {
  return (
    <div className="Card">
      <div className="Cardstyling">
      Name: {props.name}
      <br />
      Comment: {props.comment}
      </div>
      <div className="makinganewclass">
      <button onClick={() => props.delete(props.comment)}>Delete</button>
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
        comment: components.comment,
        name: components.name
      }
    ];
    setSim(temp);
    setComponents({ comment: "", name: "" });
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
      <div className="name">
        {" "}
        Name:
        <input
          type="text"
          value={components.name}
          onChange={(event) => {
            const temp = {
              ...components,
              name: event.target.value
            };
            setComponents(temp);
          }}
        />
      </div>
      <br />

      <br />
      <textarea id="stylecomment"
        rows="4"
        cols="52"
        input placeholder="Enter your comment for the idea"
        maxlength="150"
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
            name={element.name}
            delete={del}
          />
        );
      })}
    </div>
  );
}
