import React from "react"; 

const Idea = ({ idea }) => {
  //const comment="This is a sample comment written by Juanita"

  // Downvoted
  // -  Stroke red
  // -  Fill orangered? otherwise none

  // Upvoted
  // -  Stroke green
  // -  Fill lime otherwise none

  // Comment
  // -  Stroke .blue-icon
  // -  Fill lightskyblue

  // if (loggedInName in upVoters) {
  //   make it lime filled
  // }

  return (
    <div className="content">
      <div className="content-container idea">
        <div className="content-container flex-container" style={{ paddingBottom: "0px" }}>
          <div className="flex-component flex-70">
            <h3>{idea.content}</h3>
          </div>
          <div className="flex-component flex-30 flex-end flex-container">
            <div className="flex-component">
              <svg className="h-6 w-6 icon" xmlns="http://www.w3.org/2000/svg" fill="orangered" viewBox="0 0 24 24" stroke="red">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
              </svg>
            </div>
            <div className="flex-component">
              <p className="big centered">{idea.upVotes - idea.downVotes}</p>
            </div>
            <div className="flex-component">
              <svg className="h-6 w-6 icon" xmlns="http://www.w3.org/2000/svg" fill="lime" viewBox="0 0 24 24" stroke="green">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-container flex-container">
        <div className="flex-component flex-70 flex-between">
          <p className="small top idea-small-details">{idea.user || "Anon"}</p>
          <p className="small top idea-small-details">1 minute ago</p>
          </div>
          <div className="flex-component flex-70 flex-end">
            <svg class="h-6 w-6 icon blue-icon comment-icon" xmlns="http://www.w3.org/2000/svg" fill="lightskyblue" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <p className="top" style={{ paddingLeft: "7px" }}>0</p>
          </div>
        </div>
        {/* {comments.map(comment => {
          return <Comment
                    text={comment.text}
                    downvotes={comment.downvotes}
                    upvotes={comment.upvotes}
                  />

        })} */}
        <div className="content-container flex-container">
          <div className="flex-component flex-70 flex-container">
              <div className="flex-compoment flex-30">
                <input placeholder="Insert Comment"></input>
              </div>
          </div>
        </div> 
        {/*<div className="content-container flex-container">
          <div className="flex-component flex-70 flex-container">
              <div className="flex-compoment flex-70">
                <input placeholder={idea.personComment}></input>
              </div>
          </div>
      </div>*/}   
      </div>
    </div>
  )
}

export default Idea;