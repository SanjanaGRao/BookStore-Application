const mongoose = require('mongoose');
const CustomerSchema = mongoose.Schema({
    userId: {type: String},
    name: String,
    phoneNumber: {type: Number,required: true},
    pinCode: {type: String,required: true},
    locality: String,
    address: {type: String,required: true},
    city: {type: String,required: true},
    landMark: String,
    type: {type: String,required: true}
}, {timestamps: true});
const Customer = mongoose.model('Customer', CustomerSchema);

const createCustomer = (userId,customerDetails) => {
    const customer = new Customer({
        userId:userId,
        name:customerDetails.name,
        phoneNumber:customerDetails.phoneNumber,
        pinCode:customerDetails.pinCode,
        locality:customerDetails.locality,
        address:customerDetails.address,
        city:customerDetails.city,
        landMark:customerDetails.landMark,
        type:customerDetails.type
    })
    return customer.save();
}
const findCustomer = (userId) => {
    return Customer.find({userId: userId});
}
module.exports= { createCustomer, findCustomer };