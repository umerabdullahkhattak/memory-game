import React, { useState, useEffect } from "react";
import Picture from "./Picture";
import Picture2  from "./Picture2";

const App = () => {
  const [BestScore, SetBestScore] = useState(0);
  const BestScoreIncrement = (score) => {
    if ((score + BestScore) > BestScore) {
      SetBestScore(BestScore + 1);
    }
    
  } 

  return (
    <div>
      <h1>Best Score: {BestScore}</h1>
      <Picture BestScoreIncrement={BestScoreIncrement}/>
      <Picture2 BestScoreIncrement={BestScoreIncrement}/>

    </div>
  );
};

export default App;