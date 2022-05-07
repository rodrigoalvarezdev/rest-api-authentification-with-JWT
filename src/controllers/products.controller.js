
import Products from "../models/products";

export const createProduct = async (req, res)=>{
    const product = new Products(req.body);
    const saved = await product.save();
    console.log(saved);
}; 

export const getProducts = async (req, res)=>{
    const products = await Products.find();
    res.json(products);
}; 

export const getProductById = async (req, res)=>{
    const product = await Products.findById(req.params.productId);
    res.status(200).json(product);
}; 

export const updateProductsById = async (req, res)=>{
    const product = await Products.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    });
    res.status(204).json(product);
}; 

export const deleteProductsById = async (req, res)=>{
    const product = await Products.findByIdAndDelete(req.params.productId);
    res.status(204).json();
}; 