const Note = require('../models/note.model')


module.exports = {
        // CRUD Queries
        findAll: (req, res)=>{
            Note.find()
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
            Note.findById(req.params.id)
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
            Note.create(req.body)
            .then(dbResponse => {
                console.log("DATABASE RESPONSE TO CREATE :",dbResponse );
                res.status(201).json(dbResponse)
            })
            .catch(dbError=>{
                console.log("DATABASE ERROR CREATE : ", dbError);
                res.status(400).json(dbError)
            })
        },
        update: (req, res)=>{
            Note.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
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
            Note.findByIdAndDelete(req.params.id)
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

