import { getToken } from "../utils/userTokens";
import { getCart, addCart, deleteCart } from "../helper/axiosUrl";
import { baseUrl } from "../config/baseUrl";
const token = getToken();

export const cartGet = () => {
  let url = `${baseUrl}/cart`;
  return getCart(url, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const create = (data) => {
  let url = `${baseUrl}/cart`;
  return addCart(url, data, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const deleteItems = (id) => {
  console.log(id);
  let url = `${baseUrl}/cart/${id}`;
  return deleteCart(url, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const emptyCart = (id) => {
  let url = `${baseUrl}/cart`;
  return deleteCart(url, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};
