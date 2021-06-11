import logo from './logo.svg';
import './App.css';
import store from './store/store';
import {incNumer,decNumer} from './actions/index';
import  {useSelector,useDispatch} from 'react-redux';


function App() {
  const myState = useSelector ((state)=>state.changeTheNumer);
 const dispatch =useDispatch ();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Hello react redux
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Redux
        </a>
        <div className="quantity">
               <a className="quantity_minus" title="Decrement" onClick = {() => dispatch(decNumer())}><span> - </span></a>
               <input name="quantity" type="text" className="quantity_input" value={myState}></input>
                     
               <a className="quantity_plus" title="Increment" onClick = {() => dispatch(incNumer())}><span> + </span></a>
        </div>
      </header>
    </div>
  );
}

export default App;
