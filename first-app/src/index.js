import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //Component
import registerServiceWorker from './registerServiceWorker';

// AppComponent rendered in root div, that is in index.html
ReactDOM.render(<App />, document.getElementById('root'));  
//You can also try the following by commenting out the above line and uncommenting the below line
//ReactDOM.render(<h1>Test</h1>, document.getElementById('root'));


registerServiceWorker();
