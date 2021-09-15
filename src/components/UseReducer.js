import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "Increment") {
    state = state + 1;
  }
  if (action.type === "Decrement") {
    state = state + 1;
  }
  return state;
};

export default function UseReducer() {
  const initialValue = 20;
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>{state}</h1>
      <button className="incr" onClick={() => dispatch({ type: "Increment" })}>
        Increment
      </button>
      <button className="incr" onClick={() => dispatch({ type: "Decrement" })}>
        Decrement
      </button>
    </div>
  );
}
