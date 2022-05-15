const mongoose = require("mongoose");
const uuid = require("uuid");

const ProductSchema = new mongoose.Schema(
  {
    _id: {type: String, default: uuid.v1},
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    instock: { type: Number, required: true },
    imgSrc: { type: String, required: true },
      
  },
  {_id: false}
  );

module.exports = mongoose.model("Product", ProductSchema);
 