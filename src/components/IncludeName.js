import React from "react";

const handleClick = (evt) => {
  evt.preventDefault();
  alert(`Clicked Include Name`);
};

const IncludeName = () => {
  return <button onClick={handleClick}>Include Name</button>;
};

export default IncludeName;
