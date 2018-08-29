import React, { Component } from 'react';
import './Food.css';  //you need to have css file extn 

class Food extends Component {

  render( props ){
    console.log(this.props);
    return (
      <div className='card'>
        <h1>Food Items </h1>
        <input type='text' onChange={this.props.change} />  
        {/* onChange is the react synthetic event */}
      </div>
    );
  }
}

export default Food;