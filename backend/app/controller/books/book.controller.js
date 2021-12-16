/**
 * @file            : book.controller.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 */
const {getBooks} = require("../../service/books/book.service");

/**
 * @description to get all the books from the database
 * @param {Object} req 
 * @param {Object} res 
 */
exports.findAll = (req, res) => {
    getBooks().then(books => {
        res.send(books);
    }).catch(err => {
        return res.send(err)
});
}