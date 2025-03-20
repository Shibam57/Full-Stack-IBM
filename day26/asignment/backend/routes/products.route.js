const express=require('express');
const { getProducts, createProduct } = require('../controllers/products.controller');


const productRouter=express.Router();

productRouter.get("/products",getProducts);
productRouter.post("/create-product",createProduct);

module.exports={
    productRouter
}