import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("useEffect render");
    if (value >= 1) {
      document.title = `New Title (${value})`;
    }
  }, [value]);
  return (
    <>
      <h2>useEffect Basics</h2>
      <h3>{value}</h3>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Change title
      </button>
    </>
  );
};

export default UseEffectBasics;
