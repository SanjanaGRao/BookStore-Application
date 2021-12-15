import { getToken } from '../utils/userTokens';
import { getCart, addCart } from '../helper/axiosUrl';
const token = getToken();

export const getOrder = () => {
    let url = "http://localhost:5000/order/";
   return getCart(url, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};

export const createOrder = (data) => {
    let url = "http://localhost:5000/order/";
    return addCart(url, data, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    })
};
