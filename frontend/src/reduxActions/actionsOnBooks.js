import { ActionTypes } from "../reduxConstants/bookConstants";

export const setBooks = (books) => {
  return {
    type: ActionTypes.SET_BOOKS,
    payload:books,
  };
};

export const setSearchedBooks = (books) => {
    return {
      type: ActionTypes.SET_SEARCHED_BOOKS,
      payload:books,
    };
};