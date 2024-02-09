const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName : {type:String, required:true},
    mobile : {type:Number, required:true,maxlength:10},
    email: {type:String,unique:true, required:true},
    password:{type:String, required:true},
    role:{type:String, enum:['user','admin'],default:'user'}
})

const User = mongoose.model('User', userSchema);

module.exports = User;