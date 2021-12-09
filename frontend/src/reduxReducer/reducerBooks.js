import { ActionTypes } from "../reduxConstants/bookConstants";
const intialState = {
  books: [],
  searchedBooks: [],
};

export const reducerBooks = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BOOKS:
      return { ...state, books: payload };
    case ActionTypes.SET_SEARCHED_BOOKS:
      return { ...state, searchedBooks: payload };
    default:
      return state;
  }
};