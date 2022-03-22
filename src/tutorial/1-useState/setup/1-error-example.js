import React from 'react';

const ErrorExample = () => {
  let title = "Random title"
  function handleClickButton() {
    title = "hello people"
    console.log(title)
  }
  return <>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClickButton}>
      Change title
    </button>
  </>
};

export default ErrorExample;
