import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

class Post extends Component {
  postDeleteHandler(){
    this.props.dispatch({
        type:'DELETE_POST',
        id: this.props.post.id
      }
    );
  }

  render() {
    var _url = 'posts/'+this.props.post.id;
    return (
      <div>
        <h2>
          <NavLink to={_url}>{this.props.post.title}</NavLink>
        </h2>
        <p>{this.props.post.message}</p>
        <button 
          className='btn btn-primary' >Edit</button>
        <button 
          className='btn btn-default' 
          onClick={ this.postDeleteHandler.bind(this) }>Delete</button>
      </div>
    );
 }
}
//export default Post;
export default connect()(Post); 