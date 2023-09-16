const Author = require('../models/author.model')


module.exports = {
        // CRUD Queries
        findAll: (req, res)=>{
            Author.find().sort({name:1})
            .then(dbResponse => {
                console.log("DATABASE RESPONSE TO FIND ALL :",dbResponse );
                res.status(200).json(dbResponse)
            })
            .catch(dbError=>{
                console.log("DATABASE ERROR FIND ALL : ", dbError);
                res.status(400).json(dbError)
            })
        },
        findById: (req, res)=>{
            Author.findById(req.params.id)
            .then(dbResponse => {
                console.log("DATABASE RESPONSE TO FIND ONE :",dbResponse );
                res.status(200).json(dbResponse)
            })
            .catch(dbError=>{
                console.log("DATABASE ERROR FIND ONE : ", dbError);
                res.status(400).json(dbError)
            })
        },
        createOne: (req, res)=>{
            Author.create(req.body)
            .then(dbResponse => {
                console.log("DATABASE RESPONSE TO CREATE :",dbResponse );
                res.status(201).json(dbResponse)
            })
            .catch(dbError=>{
                console.log("DATABASE ERROR CREATE : ", dbError.errors);
                res.status(400).json(dbError.errors)
            })
        },
        update: (req, res)=>{
            Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(dbResponse => {
                console.log("DATABASE RESPONSE TO UPDATE :",dbResponse );
                res.status(200).json(dbResponse)
            })
            .catch(dbError=>{
                console.log("DATABASE ERROR UPDATE : ", dbError);
                res.status(400).json(dbError)
            })
        },
        delete: (req, res)=>{
            Author.findByIdAndDelete(req.params.id)
            .then(dbResponse => {
                console.log("DATABASE RESPONSE TO DELETE :",dbResponse );
                res.status(200).json(dbResponse)
            })
            .catch(dbError=>{
                console.log("DATABASE ERROR DELETE : ", dbError);
                res.status(400).json(dbError)
            })
        }
} 

