import { createStore } from "redux";
import myReducer from "./reduxReducer/index";

const myStore = createStore(
  myReducer,{},  
);

export default myStore;