const {Router} = require('express');
const cartController = require('../../controller/cart/cart.controller');
const routerCart = Router();
const {ensureToken} = require('../../middleware/cart/cart.middleware');

routerCart.get('/:id',  cartController.getCartItems);
routerCart.post('/:id',  cartController.addCartItem);
routerCart.delete('/:id/:itemId', cartController.deleteItem);
routerCart.delete('/:id', cartController.deleteCart);

module.exports = routerCart;