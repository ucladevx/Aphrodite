/*
 * src/store.js
 * No initialState
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";
export default function configureStore(initialState = {}) {
  return createStore(rootReducer, applyMiddleware(thunk));
}
