import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/counter";

// useSelector is using the store to get the data and we are using the dispatch to dispatch the action

function App() {
  //   // Name of the variable that we want to use in our component and we are getting from the store
  const { count } = useSelector((state) => state.counter); // we are getting the count from the state

  const dispatch = useDispatch(); // useDispatch is a hook
  return (
    <div className="App">
      <h1> The count is : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by payload
      </button>
    </div>
  );
}

export default App;
