import {getToken} from '../utils/userTokens';
import {getCart, addCart} from '../helper/axiosUrl';
const token = getToken();

export const getCustomer = () => {
    let url = `http://localhost:5000/customer/${token}`
    return getCart(url).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};

export const create = (data) => {
    let url = `http://localhost:5000/customer/${token}`
    return addCart(url, data).then((response) => {
        return response
    }).catch((err) => {
        throw err
    })
};
