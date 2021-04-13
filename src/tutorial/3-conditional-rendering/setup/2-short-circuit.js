import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h2>short circuit</h2>
      <h2>{firstValue}</h2>
      <h2>Value : {secondValue || "Hello it's empty"}</h2>
      {isError ? <p>There is some errors...</p> : <p>there is no error...</p>}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error... </h1>}
    </>
  );
};

export default ShortCircuit;
