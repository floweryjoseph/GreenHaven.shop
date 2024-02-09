const express = require('express');
const adminController = require("../controllers/admin-controllers")

const router = express.Router();

router.post('/addproduct', adminController.addProduct)

router.get('/allproducts', adminController.getAllProducts)

router.get('/allusers', adminController.getAllUsers)




module.exports = router;
