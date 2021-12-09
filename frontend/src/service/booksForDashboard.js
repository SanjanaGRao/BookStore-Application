import { getBooks } from "../helper/axiosUrl";

export const getAllBooks = () => {
    let url = "http://localhost:5000/books"
    return getBooks(url).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    });
};
