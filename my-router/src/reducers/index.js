//extra steps
import {combineReducers} from 'redux';
import postReducer from './postReducer';

//combine all reducers into one big object for store
const rootReducers = combineReducers({
  posts: postReducer
})

export default rootReducers;