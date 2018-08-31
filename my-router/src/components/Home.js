import React, { Component } from 'react';
import PostForm from './Posts/PostForm';
import AllPost from './Posts/AllPost';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() { 
    return ( 
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-4"><PostForm /></div>
            <div className="col-8"><AllPost /></div>
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default Home;