import React from "react";
//import CommentBox from "../components/CommentBox";
const Comment = ({ comment }) => {

    function buttonPopup() {
        alert('You clicked this button!');
    }

    return (
        <div className="commentbox">
            <div className="content-container comment">
            <div className="content-container flex-container">
                <div className="flex-component flex-70 flex-container">
                <div className="flex-compoment flex-30">
                    <input placeholder="Enter your comment"></input>
                </div>
                </div>
            </div>
            <div className="content-container flex-container">
                <div className="flex-component flex-70 flex-container">
                <div className="flex-compoment flex-30">
                    <input placeholder={comment.commentInput}></input>
                </div>
                <svg className="h-6 w-6 icon" xmlns="http://www.w3.org/2000/svg" fill="lightblue" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                </div>
            </div>
            <div class="clickbuttonpopuphappens">
                    <button onClick={buttonPopup}>ButtonClick</button>
            </div>
            {/*}
            < CommentBox />*/}
            </div>
        </div>
    )  
}

export default Comment;
