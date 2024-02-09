const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product:{type:String , required:true},
    price:{type:Number,required:true},
    type:{type:String, required:true},
    manufacturer:{type:String, required:true},
    supplier:{type:String,required:true},
    imageUrl:{type:String, required:true},
    description:{type:String}
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;