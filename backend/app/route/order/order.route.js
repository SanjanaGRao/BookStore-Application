const {Router} = require('express');
const orderController = require('../../controller/order/order.controller');
const routerOrder = Router();

routerOrder.get('/:id',  orderController.getOrderItems);
routerOrder.post('/:id',  orderController.addOrderItem);

module.exports = routerOrder;