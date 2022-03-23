import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("")
  const [isError, setIsError] = useState(false)

  return <>
  <p>{text || "John Doe"}</p>
  {isError && <p>ERROR</p>}
  <button className="btn" onClick={() => setIsError(!isError)}>toggle</button>
  {isError ? <p>there is an error</p> : (<div>
    <p>There is no error</p>
    </div>)}
  </>
};

export default ShortCircuit;
