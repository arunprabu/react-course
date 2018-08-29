import React from "react";

// Functional Component in arrow function
var Subscribe = (props) => {
  console.log(props);
  return(
    <p>Subscription Ends: { props.date }</p>
  )
};

export default Subscribe;
