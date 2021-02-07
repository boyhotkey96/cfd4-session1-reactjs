import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction } from "../../redux/store";

export default function DemoRedux() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function _increment() {
    dispatch(incrementAction(10));
  }

  function _decrement() {
    dispatch(decrementAction(Math.round(Math.random() * 10 + 1)));
  }

  console.log(state);

  return (
    <p style={{ height: 500, paddingTop: 100 }}>
      Clicked: <span id="value">{state}</span> times
      <button id="increment" onClick={_increment}>
        +
      </button>
      <button id="decrement" onClick={_decrement}>
        -
      </button>
      <button id="incrementAsync">Increment async</button>
    </p>
  );
}
