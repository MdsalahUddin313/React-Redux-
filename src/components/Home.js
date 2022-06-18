import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div>
      <h4>React Redux Practices</h4>
      <p>
        In this project we are going to experiment with react and redux. Here we
        are doing 3 projects in 3 different libraries{" "}
      </p>
      <ol>
        <li>
          Counter app ====/ <strong>React Redux toolkit </strong>
        </li>
        <li>
          Todo List app ====/ <strong>React Redux Slice toolkit</strong>
        </li>
        <li>
          Ecommerce app ====/ <strong>React Redux Thunk</strong>
        </li>
      </ol>
    </div>
  );
};

export default Home;
