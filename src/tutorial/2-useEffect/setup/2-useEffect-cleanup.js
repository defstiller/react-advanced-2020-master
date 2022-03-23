import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth)
  function checkSize() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })

  return <>
    <h1>Window</h1>
    <h2>{width} PX</h2>
  </>
};

export default UseEffectCleanup;
