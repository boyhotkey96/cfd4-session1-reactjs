import { createStore, combineReducers, applyMiddleware } from "redux";

const COUNT_INCREMENT = "COUNT_INCREMENT";
const COUNT_DECREMENT = "COUNT_DECREMENT";

export function incrementAction(data) {
  return {
    type: "INCREMENT",
    payload: data,
  };
}

export function decrementAction(data) {
  return {
    type: "COUNT_DECREMENT",
    payload: data,
  };
}

function counter(state = 10, action) {
  console.log("reducers");
  switch (action.type) {
    case "INCREMENT":
      return state + (action.payload || 1);
    case "COUNT_DECREMENT":
      return state - (action.payload || 1);
    default:
      return state;
  }
}

// const logger = (store) => (next) => (action) => {
//   console.log(action);
//   next(action);
// };

let store = createStore(counter);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// setInterval(() => {
//   store.dispatch({ type: "INCREMENT" });
// }, 1000);

export default store;
