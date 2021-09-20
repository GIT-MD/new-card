import { createStore } from "redux";
import { apiReducer } from "../reducers/apiCall";

let store = createStore(apiReducer);

export default store;
