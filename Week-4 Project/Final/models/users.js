const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var userschema = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    mobileno : String,
    password : String,
    loginstatus : Boolean,
    address : Array, 
    oldorders : Array, 
    cart : Array, 
});

module.exports = mongoose.model('users', userschema);