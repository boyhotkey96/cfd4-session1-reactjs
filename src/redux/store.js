import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducer from './reducers'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const logger = (store) => (next) => (action) => {
//   console.log(action);
//   next(action);
// };

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const thunkFake = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch, store.getState())
//   } else {
//     next(action);
//   }
// }

// const middleware = [
//   thunk,
// ];

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// store.subscribe(() => {
//   console.log(store.getState());
// });

// setInterval(() => {
//   store.dispatch({ type: "INCREMENT" });
// }, 1000);

export default store;
