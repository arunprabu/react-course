import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import GetInTouch from './components/GetInTouch';
import AllPost from './components/Posts/AllPost';
import Contact from './components/Contacts/Contact';
import PageNotFound from './components/PageNotFound';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <div>
            <Navigation />
            <div className="topGap">
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} />
                <Route path="/get-in-touch" component={GetInTouch} />
                <Route path="/posts" component={AllPost}  exact strict/>
                {/* <Route path="/contacts" component={Contacts}  exact strict/> */}
                <Route path="/contacts/:id" component={Contact}/>
                <Route path="/profile" component={Contact}/>
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
