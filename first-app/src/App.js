import React, { Component } from 'react';
import './App.css';
import Contact from './Contact/Contact';
import Program from './Programs/Program';
import Food from './Food/Food';

class App extends Component {
  state = {
    programs: [
      { name: "Planet Earth", host: "David Attenborough" },
      { name: "Man vs Earth", host: "Bear Grylls" }
    ],
    foodCount: 0,
  }

  nextEpisode = () => {
    console.log('clicked');
    //To change state you should do the following
    this.setState({ 
      programs: [
        { name: "Planet Earth II", host: "David Attenborough" },
        { name: "Man vs Earth in Antarctica", host: "Bear Grylls" }
      ]
    })
  }

  changeQty = (event) => {
    console.log("Change qty");
    console.log(event.target.value);
    this.setState({
      foodCount: event.target.value
    });
  }

  clearFoodCount = () => {
    this.setState({ 
      foodCount: 0
    })
  }

  render() {

    // the following logic is around listing and looping
    let pgms = null;
    /* Lists looping with es6 maps inside render but before return */
    if( this.state.programs && this.state.programs.length > 0 ){
      // pgms are added
      pgms = this.state.programs.map(pgm => {
        console.log(pgm);
        return(
          <Program name={pgm.name} host={pgm.host } />
        )
      });

      // the above code will give an error 'key' not there.
      //react to update dom and adjust with virtual dom it needs key
      //so the below code would work well. look at the index
      /*
       pgms = this.state.programs.map( (pgm, index) => {
        console.log(pgm);
        return(
          <Program name={pgm.name} host={pgm.host } key={index} />
        )
      });
      */

    }



    //render method should return something
    return (
      <div className="App blue">
        <h1>Building  my First App</h1>
        <Contact />
        
        <Program name='Planet Earth' />
        <Program name='Man vs Wild' >Hosted by: Bear Grills</Program>
        <hr />
        {/* the above lines are with static values. below line is with states */ }
        <Program name={this.state.programs[0].name} host={ this.state.programs[0].host } />
        <Program name={this.state.programs[1].name} host={ this.state.programs[1].host } />

        <button onClick={this.nextEpisode}>Next Episode</button> {/*  don't use call operator () after function name nextEpisode */}

      <hr/>
        {/* Implementing two way Binding */} 
        <Food change={this.changeQty} />  {/* Logic is in Food.js, refer it */}  
        <div>Quantity you entered: {this.state.foodCount}</div>

        

        <button onClick={this.clearFoodCount}>Clear Cart</button> 
        {/* Conditionals with ternary expression */}
        { this.state.foodCount > 0 ? 
          <div>Food added in cart</div>
          :
          <div>Food Cart Empty</div>
        }

        {/* refering to the looped variable will work */}
        { pgms }  
      </div>
    );

    //you can also create elements and construct JSX quivalent using JS like the following
   // return React.createElement('h1', {className: 'App blue', id: 'testH1'}, 'test' );
    //but the above line is little ugly. not user friendly.
  }
}

export default App;