import React, { Component, Fragment } from 'react';

//adjacent JSX elements must be wrapped in an enclosing tag
class MyFragment extends Component {

  constructor(){
    super();
    this.state = {
      appName: "My App", 
      browserName: "Don't know"
    }
    console.log("Inside Constructor");
  }

  componentWillMount(){
    //component not rendered yet
    //runs only once
    console.log("Inside component will mount");
    
    this.setState({
      browserName: navigator.appVersion
    })
  }

  
  //there are so many other lifecycle hooks available

  render() {
    //don't do setState inside render, it would re-render the component.
    console.log("Inside Render Method");

    return(
      <Fragment>   
        <hr />
        <p>Thanks for using {this.state.appName} in {this.state.browserName} </p>
        <a href=''>Go to top</a>
      </Fragment>
    );
  }
  
  componentDidMount(){
    //ideal place to fire ajax calls
    console.log("Inside Component Did Mount");
  }

}
export default MyFragment;
