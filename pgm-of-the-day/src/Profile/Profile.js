import React, { Component } from 'react';

class Profile extends Component{
  state = {
    userName: "Arun",
    accountCreated: '4/May/2018'
  }

  //arrow function
  changeProfileOnInput = (event) =>{
    this.setState({
      userName: event.target.value
    });
  }

  render(){
    console.log(this.props);

    return(
      <div>
        <h2>Update Profile</h2>
        <input type='text' 
          onChange={this.changeProfileOnInput} value={this.state.userName}/>
        <p>Username: {this.state.userName} </p>
        <span>Account Created On: {this.state.accountCreated}</span>
      </div> 
    )
  }
}

export default Profile;