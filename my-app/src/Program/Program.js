import React, { Component } from 'react';

// this example talks about communication from child to parent with event
// line no 16 button changes from 
class Program extends Component{
  componentWillMount(){
    console.log("Component Will Mount");
  }

  render(){
    console.log(this.props);

    return(
      <div>
        <h2>#{this.props.id}: Program name: {this.props.name}</h2>  
        <p>Host: {this.props.host} </p>
        <button 
        className='btn btn-primary' 
        onClick={this.props.updateWatchList}>
        { this.props.isInWatchList? 'Added': 'Add to Watchlist'}
        </button>
      </div> 
    )
  }
}

export default Program;