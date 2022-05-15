const mongoose = require("mongoose")
const uuid = require("uuid");

const OrderSchema = new mongoose.Schema({
    _id: {type: String, default: uuid.v1},
    userId: {type: String, required: true},
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
  amount: {type: Number, required: true },
  status: {type: String, default: "pending"},
});

 module.exports = mongoose.model("Order",OrderSchema);