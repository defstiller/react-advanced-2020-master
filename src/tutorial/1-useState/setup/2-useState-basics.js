import React, { useState } from 'react';

const UseStateBasics = () => {
  const [currentVal,setCurrent] = useState("random title")
  function handleTitleClick() {
    if (currentVal === "random title") {
    setCurrent("New title")
  } else {
    setCurrent("random title")
  }
  }
  return <>
    <h1>{currentVal}</h1>
    <button onClick={handleTitleClick}>Change title</button>
  </>
};

export default UseStateBasics;
