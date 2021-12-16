/**
 * @file            : order.model.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @description schema for defining order details
 */
const OrderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    customerId: {
        type: String
    },
    items: [
        {
            productId: {
                type: String
            },
            name: String,
            author: String,
            quantity: {
                type: Number,
                required: true,
                min: [1, 'Quantity can not be less then 1.']
            },
            price: Number,
            image: {
                type: String,
                required: true
            }
        },
    ],
    bill: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
})

module.exports = Order = mongoose.model('order', OrderSchema);