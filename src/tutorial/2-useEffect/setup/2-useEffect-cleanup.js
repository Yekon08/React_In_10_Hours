import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // return () => {
    //   console.log("exit");
    //   window.removeEventListener("resize", checkSize);
    // };
  }, []);
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h2>Window</h2>
      <h1>{size} px</h1>
    </>
  );
};

export default UseEffectCleanup;
