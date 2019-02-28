/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import classesReducer from "./classesReducer"
export default combineReducers({
  simpleReducer,
  classesReducer
});
