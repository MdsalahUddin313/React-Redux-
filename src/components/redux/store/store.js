import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "../reducer/CounterReducer";
//import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import contactsReducer from "../../ToDos/ContactsSlice";

const rootReducer = combineReducers({
  count: counterReducer,
  contacts: contactsReducer,
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
