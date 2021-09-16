import React from "react";

const Comment = ({ comment }) => {

    function sayHello() {
        alert('You clicked me!');
    }

    return (
        <div className="content-container idea">
        <div className="content-container flex-container">
            <div className="flex-component flex-70 flex-container">
            <div className="flex-compoment flex-70">
                <input placeholder="Enter your comment"></input>
            </div>
            </div>
        </div>
        <div className="content-container flex-container">
            <div className="flex-component flex-70 flex-container">
            <div className="flex-compoment flex-70">
                <input placeholder={comment.commentInput}></input>
            </div>
            </div>
        </div>
        <div class="buttontest">
            <button onclick="create()">Add</button>
        </div>
        <div class="clickbuttonpopuphappens">
                <button onClick={sayHello}>Default</button>
        </div>
        </div>
    )  
}

export default Comment;
