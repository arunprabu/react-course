import React from "react";

// Functional Component in old js
// var contact = function(){
  
// };

//but the above in es6 can be 
var Contact = () => {
  return <h2>This is contact Id: 1</h2>;
}

//should be exprted
export default Contact;
//now it is ready to be imported in App.js JSX as <Contact />

/* You can reuse components...  multiple times 
<Contact /> 
<Contact />
<Contact />
in JSX of App.js */