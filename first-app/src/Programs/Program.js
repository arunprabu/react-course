import React from "react";

//but the above in es6 can be 
var Program = (props) => {   // receive the attributes here as props 
  // here goes the code in case you want dynamic, js expressions inside template
  return(
    <div>
      <h2>Favorite Program name: { props.name }</h2>  
      <span>{props.children}</span> 
    </div> 
  );
}

export default Program;