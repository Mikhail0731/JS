const mongoose = require("mongoose")


const CartSchema = new mongoose.Schema({
    userId: {type: Number, required:true, unique:true},
    products: [{
        productId: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 0,
        },
    },
],  
});

 module.exports = mongoose.model("Cart",CartSchema);