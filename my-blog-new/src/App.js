import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import GetInTouch from './components/GetInTouch';
import PageNotFound from './components/PageNotFound';
import Navigation from './components/Navigation';
import PostList from './containers/PostList';

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
              <Route path="/posts" component={PostList}  exact strict/>
              {/* <Route path="/posts/:id" component={PostList}  exact strict/> */}
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
