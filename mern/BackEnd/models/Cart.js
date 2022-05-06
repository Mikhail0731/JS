const mongoose = require("mongoose")


const CartSchema = new mongoose.Schema({
    Userid: {type: Number, required:true, unique:true},
    products: [{
        productId: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1,
        },
    },
],
   
},
 {timestamps: true}
 );

 mongoose.exports = mongoose.model("Cart",CartSchema);