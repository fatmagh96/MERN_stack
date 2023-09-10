const Joke = require('../models/jokes.model');
 
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.status(200).json(allJokes)
            console.log(allJokes);
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findRandomJoke = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            const random =  Math.floor(Math.random() * allJokes.length)
            console.log(random);
            const rndJoke = allJokes.filter((joke, idx)=> idx === random)
            res.status(200).json(rndJoke)
            console.log(rndJoke,"*****");
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.status(200).json(oneSingleJoke)
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.status(200).json(newlyCreatedJoke)
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.status(200).json(updatedJoke)
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
