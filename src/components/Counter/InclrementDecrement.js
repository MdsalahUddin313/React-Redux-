import { Button } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incremetCounter,
  decremetCounter,
  resetCounter,
} from "./../redux/actions/counterActions.js";
import "./counter.css";
//import "../../../public/images/background.jpg";
/*
1. Store Constant values
2. Creating actions [increment ,decrement,resets]
3. Creating Reducers .Reducers tells us the process of increment{count==>count+1} ,decrement{count==>count-1} ,resets{count==>0}
4. CreateStore
5. Dispatch/Selector them in view part
*/
const InclrementDecrement = () => {
  const myStyle = {
    backgroundImage:
      "url('https://media.istockphoto.com/vectors/color-gradient-background-design-abstract-geometric-background-with-vector-id1318343148?k=20&m=1318343148&s=612x612&w=0&h=oOYXnP9YNebeCarcX9o2XD7Lr2jdK1XTXuS8zVDjI0g=')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
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
    <div style={{ myStyle }} className="content_center">
      <h3 className="font_title">Counter App</h3>
      <h4>
        <strong>Count::</strong> {count}
      </h4>
      <Button
        className="button_padd"
        variant="outline-primary"
        onClick={() => handleIncrement}
      >
        increment
      </Button>
      <Button
        className="button_padd"
        variant="outline-danger"
        onClick={() => handleDecrement}
      >
        decrement
      </Button>
      <Button
        className="button_padd"
        variant="success"
        onClick={() => handleReset}
      >
        Reset
      </Button>
    </div>
  );
};

export default InclrementDecrement;
