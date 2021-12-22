import { getBooks, searchBooks } from "../helper/axiosUrl";
import { getToken } from "../utils/userTokens";
import { baseUrl } from "../config/baseUrl";
const token = getToken();

export const getAllBooks = () => {
  let url = `${baseUrl}/books`;
  return getBooks(url, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const searchABook = (data) => {
  let url = `${baseUrl}/books/search`;
  return searchBooks(url,data,`bearer ${token}`).then((response) => {
      return response;
  }).catch((err) => {
      throw err;
  });
};

export const sortBooks = (data) => {
  let url = `${baseUrl}/books/sort`;
  return searchBooks(url,data,`bearer ${token}`).then((response) => {
      return response;
  }).catch((err) => {
      throw err;
  });
}