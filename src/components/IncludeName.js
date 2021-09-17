import React, { useState } from "react";

import LoginPopup from "./LoginPopup";

const IncludeName = () => {

  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  }

  return (
    <>
      <button onClick={handleClick}>Include Name</button>
      <LoginPopup hidden={hidden}/>
    </>
  )
};

export default IncludeName;