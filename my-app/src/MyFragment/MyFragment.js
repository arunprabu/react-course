import React, { Component, Fragment } from 'react';

//adjacent JSX elements must be wrapped in an enclosing tag
class MyFragment extends Component {
  render() {
    return(
      <Fragment>   
        <hr />
        <p>Thanks for using My App</p>
        <a href='#'>Go to top</a>
      </Fragment>
    );
  }
}
export default MyFragment;
