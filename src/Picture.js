import React, { useState, useEffect } from "react";

const Picture = () => {
  const [score, setScore] = useState(0);
  const [click, setClick] = useState(false);

  const scoreIncrement = () => {
    setScore(score + 1);
    console.log(score)
    // if (score === 0 ) {
        
    //     setClick(true);
    // } else {
      
    // }
  };

  useEffect(() => {
    const button = document.getElementById("myButton");
    button.addEventListener("click", scoreIncrement)
    return () => {
       
        
    };
  }, []);

  return (
    <div>
      {score === 0 || score === 1 ? (
        <h1>Score: {score}</h1>
        
      ) : (
        <p>Button has been clicked second time</p>
      )}
      <button id="myButton">
        Click me to increase counter, clicking me second time would reset the
        score
      </button>
    </div>
  );
};

export default Picture;
