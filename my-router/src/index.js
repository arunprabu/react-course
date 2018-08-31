import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Step 9: import postReducer and pass it as argument to createStore() method
import postReducer from './reducers/postReducer';
//Step 10: import provider 
import { Provider } from 'react-redux';

// Step 1: Create a Redux Store
import { createStore } from 'redux';
//const store = createStore();  // Step2: this needs a special argument called 'reducer'

// Step3: So, create reducer folder and add the postReducer.js file

// Step7: store has a special method called as dispatch
//syntax:
/*
  store.dispatch(pass action here)
*/

//Step 9.1: below line
const store = createStore(postReducer);



//Step 10: add Provider as below
//Definition: The Provider component uses something called React Context which allows you to pass the store object to any components that needs to access it without the need to pass props.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

// Step 11: to dispatch action, let's write form submit in PostForm.js