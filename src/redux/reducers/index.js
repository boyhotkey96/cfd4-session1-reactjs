import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import homeReducer from './homeReducer';
import userReducer from './userReducer';
import courseReducer from './courseReducer.js';

export default combineReducers({
  counter: counterReducer,
  home: homeReducer,
  courseUser: courseReducer,
  user: userReducer,
})