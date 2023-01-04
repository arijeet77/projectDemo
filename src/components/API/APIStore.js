import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import APIReducer from "./APIReducer";

const middleware = [thunk];

const APIStore = createStore(
  APIReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default APIStore;
