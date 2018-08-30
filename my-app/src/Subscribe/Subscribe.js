import React from "react";

// Functional Component in arrow function
var Subscribe = (props) => {
  console.log(props);
  var textStyles = { 
    backgroundColor: 'blue', 
    color: '#ccc'
  }

  return(
    <React.Fragment>
      <p style={textStyles}>Subscription Ends: { props.date }</p>
      <p>test</p>
    </React.Fragment>
  )
};

export default Subscribe;
