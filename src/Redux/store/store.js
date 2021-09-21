import { createStore } from "redux";
import { apiReducer } from "../reducers/apiReducer";

let store = createStore(apiReducer);

export default store;
