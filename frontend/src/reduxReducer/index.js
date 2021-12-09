import { combineReducers } from "redux";
import { reducerBooks } from "./reducerBooks";

const myReducer = combineReducers({
  allBooks: reducerBooks, 
});
export default myReducer;