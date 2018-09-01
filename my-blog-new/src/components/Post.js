import React from 'react';
import { NavLink } from 'react-router-dom';

const Post = ({ post: { title, body, id }, onDelete }) => {
  return (
    <div className='postBox'>
      <h2>
        <NavLink to={`posts/${id}`} className="nav-link" exact>{ title }</NavLink>
      </h2>
      <p>{ body }</p>
      <button className="btn btn-default disabled btnSpacer" type="button">
        Edit
      </button>
      <button className="btn btn-default btnSpacer" type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Post;