import React, { useState, useEffect } from "react";

const Picture = (props) => {
  const [score, setScore] = useState(0);
  

  const scoreIncrement = () => {
    setScore(score + 1);
    if(score === 0){
      
      props.BestScoreIncrement(score + 1);
    }
  };

  useEffect(() => {
    const button = document.getElementById("myButton");
    button.addEventListener("click", scoreIncrement)
    return () => {
       
        
    };
  },);

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
