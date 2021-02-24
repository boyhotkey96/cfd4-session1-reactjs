import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import homeReducer from './homeReducer';
import userReducer from './userReducer';

export default combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer,
})