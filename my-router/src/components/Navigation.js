import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() { 
    return (  
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <NavLink to="/" className="navbar-brand">Blog App</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/get-in-touch" className="nav-link">Get In Touch</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
 
export default Navigation;