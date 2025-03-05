const Express=require('express');
const Product=require('../models/product.model.js');
const router=Express.Router();
const {getProduct, getProducts, createProduct, updateProduct, deleteProduct}=require('../controllers/product.controllers.js');
const { get } = require('mongoose');

router.get('/',getProducts)
router.get('/:id',getProduct)

router.post('/',createProduct)
// update the product
router.put('/:id',updateProduct)

//delete the product
router.delete('/id:',deleteProduct)


module.exports=router