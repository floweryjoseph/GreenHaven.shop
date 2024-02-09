const Product = require("../models/product-model")
const User = require("../models/user-model")
const addProduct = async(req, res) =>{
    //destructuring
    const {product,price,type, manufacturer,supplier,imageUrl,description}=req.body


const newProduct = new Product({
    product,
    price,
    type,
    manufacturer,
    supplier,
    imageUrl,
    description

})
try{
    await newProduct.save()
}catch(err){
return res.status(500).json({status: false, message:"something went wrong"})
}
 res.status(200).json({
    status:true, message:"Product saved successfully"
 })  

}
//////////////////////////////////////////////////////////////////////////////


const getAllProducts = async (req, res) =>{
    let products;
    try{
        products = await Product.find();

    }catch(err){
        return res.status(500).json({status: false, message:err.message});
    }
    res.json({status: true, products})
}

//////////////////////////////////////////////////////////////////////////////


const getAllUsers = async (req,res) =>{

    let users;
    try{
        users = await User.find()

    }catch(err){
        return res.status(500).json({status:false, message: err.message})
    }
    res.json({status:true,users})
}







exports.addProduct = addProduct;
exports.getAllProducts = getAllProducts;
exports.getAllUsers = getAllUsers;