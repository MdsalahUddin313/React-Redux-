//import logo from "./logo.svg";
import "./App.css";
//import store from "./store/store";
//import { incNumer, decNumer } from "./actions/index";
//import { useSelector, useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import InclrementDecrement from "./components/Counter/InclrementDecrement.js";
import "bootstrap/dist/css/bootstrap.min.css";
import TODO_list from "./components/ToDos/TODO_list";

function App() {
  //const counter = useSelector((state) => state.counter);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<InclrementDecrement />} />
          <Route path="/contacts-app" element={<TODO_list />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
/*
 <h1>Hello world</h1>
      <p>Counter Application</p>
      <p>{counter}</p>
*/
