import { getToken } from "../utils/userTokens";
import { getCart, addCart } from "../helper/axiosUrl";
import { baseUrl } from "../config/baseUrl";
const token = getToken();

export const getOrder = () => {
  let url = `${baseUrl}/order/`;
  return getCart(url, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const createOrder = (data) => {
  let url = `${baseUrl}/order/`;
  return addCart(url, data, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};
