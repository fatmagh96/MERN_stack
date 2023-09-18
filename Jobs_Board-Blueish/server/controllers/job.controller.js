const {Job} = require('../models/job.model')

const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

module.exports = {

    findAll : (req,res) => {
        Job.find(req.params).populate('user')
        // Job.find().populate('user')
        // Job.find()
        .then(dbResponse => {
            console.log("DATABASE RESPONSE TO FIND ALL :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        } )
    },
    // --------------------------------------------
    findByUserId : (req,res) => {
        console.log(req.params,'request paramsss');
        Job.find({user:req.params.userId}).populate('user')
        // Job.find().populate('user')
        // Job.find()
        .then(dbResponse => {
            console.log("DATABASE RESPONSE :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR  :", dbError);
            res.status(400).json(dbError)
        } )
    },
    // --------------------------------------------

    findOne : (req,res) => {
        Job.findById(req.params.id).populate('user')
        // Job.findById(req.params.id)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE : ", dbResponse);
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        })
    },

    create : (req,res) => {
        // comment this for red belt
        const {id:userId} = jwt.verify(req.cookies.userToken, SECRET)
        Job.create({...req.body,user:userId})
        // Job.create(req.body)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(201).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE Create :", dbError);
            res.status(400).json(dbError.errors)
        })
    },

    update : (req,res) => {
        Job.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError.errors)
        })
    },

    delete : (req, res) => {
        Job.findByIdAndDelete(req.params.id)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        })
    }
}