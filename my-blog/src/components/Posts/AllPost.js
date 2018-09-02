//this file is a container. You can later move into 'containers' folder
import React, { Component } from 'react';
//Step 18: 
import { connect } from 'react-redux';

import Post from './Post';

class AllPost extends Component {
  
  render() { 
    return ( 
      
      <div>
        <h1>All Posts</h1>
        {/* Step 19: After making state to props we'll have the posts here  */}
        {console.log(this.props.posts)}
        {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    );
  }
}

//Step 18: add the function and export statement with connect. it does exactly the same. it maps state to props
const mapStateToProps = (state) => {
  return {
      posts: state
  }
}
export default connect(mapStateToProps)(AllPost); 