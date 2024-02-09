const { response } = require("express");
const User = require("../models/user-model");
const bcrypt = require('bcryptjs');

const login = async(req,res) => {
    const {email, password} = req.body;

    let userPresent
    try{
        userPresent = await User.findOne({email:email});
    }catch(err){
        return res.status(500).json("Internal Error")

    }
    if(!userPresent){
        return res.status(500).json("Invalid Credentials")
    }
    const passValid = await bcrypt.compare(password, userPresent.password);
    if(passValid === true){
        res.json({status: true, user: userPresent})
    }else{

        return res.status(500).json("Invalid Credentials")
    }
    
}
//-----------------------------

const signup = async(req, res)=>{
    console.log(req.body)
    const {name,mobile,email,password}  = req.body;
    
    const hashPassword =await bcrypt.hash(password, 12)

const newUser = new User({
    fullName :name,
    mobile :mobile,
    email :email,
    password :hashPassword
})

let createdUser
    try{
        createdUser = await newUser.save()
    }catch(err){
        console.log(err)
}
res.json({status:true,createdUser})
}

exports.login = login;
exports.signup = signup;