const db = require("./db");
const mongoose = require("mongoose")
const ProductSchema = {
    name: String,
    specs: String,
    price: Number,
    class: String,
    productCode: Number,
    image: String,

  };
  
module.exports = mongoose.model("Product", ProductSchema);