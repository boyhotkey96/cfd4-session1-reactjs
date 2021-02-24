import { COUNT_DECREMENT, COUNT_INCREMENT } from "../actions/type";

export default function counter(state = 10, action) {
  console.log("reducers");
  switch (action.type) {
    case COUNT_INCREMENT:
      return state + (action.payload || 1);
    case COUNT_DECREMENT:
      return state - (action.payload || 1);
    default:
      return state;
  }
}