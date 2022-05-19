const mongoose = require("mongoose")
const uuid = require("uuid");

const CartSchema = new mongoose.Schema({
    _id: {type: String, default: uuid.v1},
    userId: {type: String, required:true},
    products: [{
        productId: {
            type: String,
        },
        productName: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 0,
        },
        price: {
            type: Number,
            default: 0,
        },
    },
],  
});

 module.exports = mongoose.model("Cart",CartSchema);