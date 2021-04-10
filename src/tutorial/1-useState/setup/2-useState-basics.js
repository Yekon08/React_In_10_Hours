import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("useState Basics");
  const handleClick = () => {
    setTitle("Random Title");
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
