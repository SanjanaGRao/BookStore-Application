import { getToken } from "../utils/userTokens";
import { getCart, addCart } from "../helper/axiosUrl";
import { baseUrl } from "../config/baseUrl";
const token = getToken();

export const getCustomer = () => {
  let url = `${baseUrl}/customer`;
  return getCart(url, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const create = (data) => {
  let url = `${baseUrl}/customer`;
  return addCart(url, data, `bearer ${token}`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      throw err;
    });
};
