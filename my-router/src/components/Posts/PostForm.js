import React, { Component } from 'react';
//Step 15: import connect from react-redux, a connector package, and use it in the last export line
import {connect} from 'react-redux';


class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message
    }
    console.log(data); //Check the Data

    //Step 17: IT's time to dispatch events . and Step 18 is in AllPost.js
    this.props.dispatch({
      type:'ADD_POST',
      data}
    );
    this.getTitle.value = '';
    this.getMessage.value = '';

  }

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        {/* Step 13: Write Form Submit */}
        <form onSubmit={this.handleSubmit}> 
          <input required 
            type="text" 
            placeholder="Enter Post Title" 
            className='form-control' 
            ref={(input)=>this.getTitle = input}/><br /> 
            {/* Step 12: Added Refs for Form Inputs */}
          <textarea required 
            rows="5" 
            cols="28" 
            placeholder="Enter Post" 
            className='form-control' 
            ref={(input)=>this.getMessage = input}/><br />
          <button className='btn btn-primary'>Post</button>
        </form>
      </div>
    )
  }
}

//export default PostForm;
//Step 16:  comment the above line and make it like the following. after connecting props will available in this component. check Step 17 here in this file.
export default connect()(PostForm); 

