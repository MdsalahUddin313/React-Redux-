import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incremetCounter,
  decremetCounter,
  resetCounter,
} from "./../redux/actions/counterActions.js";
/*
1. Store Constant values
2. Creating actions [increment ,decrement,resets]
3. Creating Reducers .Reducers tells us the process of increment{count==>count+1} ,decrement{count==>count-1} ,resets{count==>0}
4. CreateStore
5. Dispatch/Selector them in view part
*/
const InclrementDecrement = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incremetCounter());
  };
  const handleDecrement = () => {
    dispatch(decremetCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h4>
        <strong>Count::</strong> {count}
      </h4>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default InclrementDecrement;
