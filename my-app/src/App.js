import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Program from './Program/Program';
import Subscribe from './Subscribe/Subscribe';
import Profile from './Profile/Profile';
import MyFragment from './MyFragment/MyFragment';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class App extends Component {
  state = {
    programs: [
      { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: false},
      { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
      { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
      { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
    ],
    tv: "NatGeo",
    value: 0
  };

  handleTabChange = (event, value) => {
    this.setState({ value: value });
  };

  updateWatchListHandler = (id) =>{
    //you need to find out the exact id and then change isInWatchList: true
    //task for participants to find the right id and update the button label as 'Added'
    //also implement a logic to remove from watch list also
    this.setState({
      programs: [
        { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: true},
        { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
        { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
      ]
    });
    
  }

  render() {
    console.log("RENDERING");

    let pgms = null;
    pgms = this.state.programs.map(pgm => {
      console.log(pgm);
      return(
        <Program 
          key={pgm.id} 
          name={pgm.name} 
          host={pgm.host } 
          id={pgm.id}
          isInWatchList={pgm.isInWatchList}
          onUpdateWatchList={this.updateWatchListHandler.bind(this, pgm.id)}
          />
      )
    });

    return(
      <div className='Align-center'>
        <Header appName='My App'>v 1.0</Header>
      
        <Paper >
          <Tabs
            value={this.state.value}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Programs" />
            <Tab label="Subscriptions"/>
            <Tab label="My Profile" />
          </Tabs>
        </Paper>
        {this.state.value === 0 && <TabContainer>
          { pgms } 
          <p>Watch All Programs in {this.state.tv}</p>
        </TabContainer>}
        {this.state.value === 1 && <TabContainer>
          <Subscribe date='Sep 15, 2018'/ >
        </TabContainer>}
        {this.state.value === 2 && <TabContainer>
          <Profile />
        </TabContainer>}
        <br/>
        <MyFragment />

        <Footer />
      </div>
    );
  }
}
export default App;
