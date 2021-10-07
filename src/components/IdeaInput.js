import { useState } from "react";

const IdeaInput = ({ setIdea, setPlaceholder, suggestions }) => {
  const [counter, setCounter] = useState(0); //Counter to be used for suggestion iteration

  if (suggestions) {
    //Informs idea of inital placeholder if it's been fetched.
    setPlaceholder(suggestions[counter].suggestion);
  } else {
    setPlaceholder("");
  }

  const iterateSuggestions = () => {
    //Iterates through all the suggestions when pressing reload button.
    if (counter >= suggestions.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
    setPlaceholder(suggestions[counter].suggestion); //Informs idea of current placeholder for submission purposes
  };

  const placeholder =
    suggestions == null ? "" : suggestions[counter].suggestion;
  return (
    <>
      <div className="flex-compoment flex-70">
        <input
          placeholder={placeholder}
          onChange={(e) => setIdea(e.target.value)}
        />
      </div>
      <div className="flex-compoment flex-30 flex-start">
        <svg
          className="h-6 w-6 icon blue-icon button-icon icon-circle"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          onClick={iterateSuggestions}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </div>
    </>
  );
};

export default IdeaInput;
