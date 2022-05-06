const mongoose = require("mongoose")


const ProductsSchema = new mongoose.Schema({
    id: {type: Number, required:true, unique:true},
    name: {type: String, required:true},
    price: {type: Number, required:true},
    inStock: {type: Number, required:true},
    img: {type: String, required:true},
},
 {timestamps: true}
 );

 mongoose.exports = mongoose.model("Products",ProductsSchema);