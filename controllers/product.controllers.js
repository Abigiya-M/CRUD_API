const Product =require('../models/product.model.js')

const getProducts = async (req, res) => {
    try{
        const products= await Product.find({});
        res.status(200).json(products)
        }catch(Error){
          res.status(400).json({Error: Error.message})
        }
    }
const getProduct= async (req, res) => {
   try{
      const product=await Product.findById(req.params.id)
      res.status(200).json(product)
      
    }catch(ERROR){
      res.status(400).json({error: Error.message})
    }
}
const createProduct= async (req, res) => {
    try{
        const product=await Product.create(req.body)
        res.status(200).json({product})
    }
    catch(Error){
      res.status(400).json({error: Error.message})
    }
}
const updateProduct= async (req, res) => {
    try{
        const {id}= req.params
        const product=await Product.findByIdAndUpdate(id,req.body)
        if(!product){
          res.status(404).json({message: "Product not found"})
        }
        const updateProduct=await Product.findById(id)
        res.status(200).json(updateProduct)
    
      }catch(ERROR){
        res.status(400).json({error:ERROR.message})
      }
    }
const deleteProduct=async (req,res)=>{

    try{
        const {id}= req.params
        const product=await Product.findByIdAndDelete(id)
    
        if(!product){
          return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json({message: "Product deleted"})
      }catch(ERROR){
        res.status(500).json({ERROR: ERROR.message})
      }
     
}
module.exports={
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}