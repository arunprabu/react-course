import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Program from './Program/Program';
import Subscribe from './Subscribe/Subscribe';
import Profile from './Profile/Profile';
import MyFragment from './MyFragment/MyFragment';

class App extends Component {
  state = {
    programs: [
      { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: false},
      { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
      { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
      { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
    ]
  };

  updateWatchListHandler = (id) =>{
    //you need to find out the exact id and then change isInWatchList: true
    //task for participants to find the right id and update the button label as 'Added'
    //also implement a logic to remove from watch list also
    this.setState({
      programs: [
        { id: 1, isInWatchList: true},
        { id: 2, isInWatchList: false},
        { id: 3, isInWatchList: false},
        { id: 4, isInWatchList: false}
      ]
    });
    
  }

  render() {
    return(
      <div className='Align-center'>
        <Header />
        {/* should loop thru the following */ }
        <Program 
          id='1'
          name='The Planet Earth' 
          host='David Attenborough' 
          updateWatchList={this.updateWatchListHandler.bind(this, 1)}
          isInWatchList={this.state.programs[0].isInWatchList}/>
        <Program 
          id='2'
          name='Cricket World Cup 2020' 
          host='Ganguly'
          updateWatchList={this.updateWatchListHandler.bind(this, 4)}
          isInWatchList={this.state.programs[1].isInWatchList}/>
        <Program 
          id='3'
          name='Man Vs Wild' 
          host='Bear Grylls'
          updateWatchList={this.updateWatchListHandler.bind(this, 4)}
          isInWatchList={this.state.programs[2].isInWatchList}/>
        
        <Program 
          id='4'
          name='The Planet Earth IV' 
          host='David Attenborough' 
          updateWatchList={this.updateWatchListHandler.bind(this, 4)}
          isInWatchList={this.state.programs[3].isInWatchList}/>

        <Subscribe date='Sep 15, 2018'/ >

        <Profile />

        <MyFragment />


        
        <Footer />
      </div>
    );
  }
}
export default App;
