import { useState } from "react";

import Suggestions from "./Suggestions";


const QuestionInput = ({setQuestion}, {question}) => {
    const [counter, setCounter] = useState(0);
  
    const iterateSuggestions = () => {
      if (counter >= Suggestions.length - 1 ) {
        setCounter(0)
      } else {
        setCounter(counter + 1)
      }
    }
    return (
      <>
      <div className="flex-compoment flex-70">
        <input
          placeholder={Suggestions[counter].suggestion}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div className="flex-compoment flex-30 flex-start">
        <svg className="h-6 w-6 icon blue-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" onClick={iterateSuggestions}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      </div>
      </>
    )
  };
  
  export default QuestionInput;