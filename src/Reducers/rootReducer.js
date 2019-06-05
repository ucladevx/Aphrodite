/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import classesReducer from "./classesReducer";
import formReducer from "./formReducer";
export default combineReducers({
  simpleReducer,
  classesReducer,
  formReducer
});
