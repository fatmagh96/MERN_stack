const Person = require('../models/person.model')
console.log(Person);

module.exports = {
    // CRUD Queries as functions
    findAllPeople: (req, res)=>{
        Person.find()
        .then(response => 
            res.status(200).json(response)
            )
        .catch(error => res.status(400).json(error))
    },
    findOnePerson: (req,res)=>{
        Person.findOne({_id:req.params.id})
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json(error))
    },
    createPerson: (req,res)=>{
        Person.create(req.body)
        .then(respnse=> res.status(201).json(respnse))
        .catch(error=> res.status(400).json(error))
    },
    updatePerson: (req,res)=>{
        Person.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(response=>res.status(200).json(response))
        .catch(error=> res.status(400).json(error))
    },
    deletePerson: (req,res)=>{
        Person.findByIdAndDelete({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    }
}