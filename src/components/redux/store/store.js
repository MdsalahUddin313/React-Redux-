import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "../reducer/CounterReducer";

const rootReducer = combineReducers({
  count: counterReducer,
});
const store = createStore(rootReducer);
export default store;

/**
 *import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'

export default combineReducers({
  todos,
  counter
})
 */
