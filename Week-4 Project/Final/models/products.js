const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productschema = new Schema({
    title : String,
    imageurl : String,
    id : String,
    shortdes : String,
    longdes : String,
    price : Number,
    quantity : Number,
    rating : Array,
    reviews : Array, 
});

module.exports = mongoose.model('products', productschema);