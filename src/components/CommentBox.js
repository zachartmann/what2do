import React, { useState } from "react";

function Card(props) {
  return (
    <div className="Card">
      <div className="Cardstyling">
      Comment: {props.comment}
      <br>
      </br>
      User Account: Juanita
      </div>
      <div className="makinganewclass">
      <button id="buttonid" onClick={() => props.delete(props.comment)}>Delete</button>
      </div>
      <br />
    </div>
  );
}

export default function Commentbox() {
  const [sim, setSim] = useState([]);
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const [components, setComponents] = useState({
    comment: "",
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
    <div className="Commentoverall">
      <br />

      <br />
      <div className="flex-component flex-70 flex-container">
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
      <button
        onClick={() => {
          handleComment();
        }}
      >
        Add comment
      </button>
      </div>
      <div>Counter: {count} </div>
      <button onClick={increment}>Increment</button>
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
