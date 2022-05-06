const mongoose = require("mongoose")


const OrderSchema = new mongoose.Schema({
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
  amount: {type: Number, required: true },
  status: {type: String, default: "pending"},
},
 {timestamps: true}
 );

 mongoose.exports = mongoose.model("Order",OrderSchema);