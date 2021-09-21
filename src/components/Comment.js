import React from "react";
import CommentBox from "../components/CommentBox";

const Comment = ({ comment }) => {

    function buttonPopup() {
        alert('This button will mean something eventually maybe to see more comments');
    }

    return (
        <div className="commentbox">
            <div className="content-container comment">
            <div className="content-container flex-container">
                <div className="flex-component flex-70 flex-container">
                <div className="flex-compoment flex-30">
                    <input placeholder={comment.commentInput}></input>
                </div>
                </div>
            </div>
            <div class="clickbuttonpopuphappens">
                    <button onClick={buttonPopup}>ButtonClick</button>
            </div>
            < CommentBox />
            </div>
        </div>
    )  
}

export default Comment;
