const Product = require('../models/product.model')


module.exports = {
    // CRUD Queries as functions
    findAllProducts: (req, res)=>{
        Product.find()
        .then(response => 
            res.status(200).json(response)
            )
        .catch(error => res.status(400).json(error))
    },
    findOneProduct: (req,res)=>{
        Product.findOne({_id:req.params.id})
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json(error))
    },
    createProduct: (req,res)=>{
        Product.create(req.body)
        .then(respnse=> res.status(201).json(respnse))
        .catch(error=> res.status(400).json(error))
    }
    // updateProduct: (req,res)=>{
    //     Product.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
    //     .then(response=>res.status(200).json(response))
    //     .catch(error=> res.status(400).json(error))
    // },
    // deleteProduct: (req,res)=>{
    //     Product.findByIdAndDelete({_id:req.params.id})
    //     .then(response=>res.status(200).json(response))
    //     .catch(error=>res.status(400).json(error))
    // }
}