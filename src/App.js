import React, { useState, useEffect } from "react";
import Picture from "./Picture";

const App = () => {
  // const [color, setColor] = useState("black");

  // useEffect(() => {
  //   const changeColorOnClick = () => {
  //     if (color === "black") {
  //       setColor("red");
  //     } else {
  //       setColor("black");
  //     }
  //   };
    
  //   document.addEventListener("click", changeColorOnClick);

  //   return () => {
  //     document.removeEventListener("click", changeColorOnClick);
  //   };
  // }, [color]);

  return (
    <div>
      <Picture/>
    </div>
  );
};

export default App;