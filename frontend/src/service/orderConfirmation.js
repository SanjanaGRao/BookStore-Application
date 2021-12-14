import { getToken } from '../utils/userTokens';
import { getCart, addCart } from '../helper/axiosUrl';
const token = getToken();

export const getOrder = () => {
    let url = `http://localhost:5000/order/${token}`;
   return getCart(url).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};

export const createOrder = (data) => {
    let url = `http://localhost:5000/order/${token}`;
    return addCart(url, data).then((response) => {
        return response
    }).catch((err) => {
        throw err
    })
}
