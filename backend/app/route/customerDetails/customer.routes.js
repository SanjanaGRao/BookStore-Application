const {Router} = require('express');
const customerController = require('../../controller/customerDetails/customer.controller');
const routerCustomer = Router();
const {ensureToken} = require('../../middleware/cart/cart.middleware');

routerCustomer.get('/', ensureToken, customerController.findCustomer);
routerCustomer.post('/', ensureToken, customerController.createCustomer);

module.exports = routerCustomer;