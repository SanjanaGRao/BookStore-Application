/**
 * @file            : book.routes.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 */
const express = require('express');
const routerBook = express.Router();
const books = require('../../controller/books/book.controller');

//to fetch all books
routerBook.get('/', books.findAll);

module.exports = routerBook;