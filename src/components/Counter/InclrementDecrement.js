import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incremetCounter } from "./../redux/actions/counterActions";
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
    dispatch(incremetCounter);
  };
  console.log(count);
  return (
    <div>
      <h1>Counter App</h1>
      <h4>
        <strong>Count::</strong> {count}
      </h4>
      <button onclick={handleIncrement}>increment</button>
      <button>decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default InclrementDecrement;
