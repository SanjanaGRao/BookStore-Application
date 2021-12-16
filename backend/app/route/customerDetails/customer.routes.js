/**
 * @file            : customer.routes.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 */
const {Router} = require('express');
const customerController = require('../../controller/customerDetails/customer.controller');
const routerCustomer = Router();
const {ensureToken} = require('../../middleware/cart/cart.middleware');

//to find a customer detail
routerCustomer.get('/', ensureToken, customerController.findCustomer);

//to get a new customer detail
routerCustomer.post('/', ensureToken, customerController.createCustomer);

module.exports = routerCustomer;