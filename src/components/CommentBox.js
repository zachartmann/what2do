import React, { useState } from "react";

const CommentBox = ({ }) => {
  const [sim, setSim] = useState([]);
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
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

    /*if (document.getElementbyId('button').clicked == true)
    {
      return (
      <button onClick={increment}>Comment counter</button>
    )
  }*/

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

  /*function Number2() {
    console.log('calling the second function trying to make this function do what button{increment} does')
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }*/

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
            /*Number2();*/
          }}
        >
          Add comment 
        </button>
        </div>
        <div>Counter: {count} </div>
        {/* is there a way to get these two functions in the same handleComments onClick}*/}
        <button onClick={increment}>Comment Count</button>
        <button onClick={decrement}>Comment Decrease</button>
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

export default CommentBox;

