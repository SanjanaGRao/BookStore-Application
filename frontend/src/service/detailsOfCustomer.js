import { getToken } from "../utils/userTokens";
import { getCart, addCart } from "../helper/axiosUrl";
const token = getToken();

export const getCustomer = () => {
  let url = "http://localhost:5000/customer";
  return getCart(url, `bearer ${token}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

export const create = (data) => {
  let url = "http://localhost:5000/customer";
  return addCart(url, data, `bearer ${token}`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      throw err;
    });
};
