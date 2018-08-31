import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params);
  }
  render() { 
    const _id = this.props.match.params.id;
    return ( <h1>Contact ID: {_id}  </h1> );
  }
}

export default Contact;