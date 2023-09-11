const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: [true, "First Name is required!!"],
        minlength: [3, "First Name must be at least 3 characters long!!"]
    },
    lastName: {
        type:String,
        required: true,
        minlength: [3, "Last Name must be at least 3 characters long!!"]
    },
    age: {
        type:Number,
        required: [true, "{PATH} is very required"],
        min: 1,
        max: 120
    },
    isFunny: {
        type: Boolean,
        default: false
    }
}, {timestamps:true})

// const Person = mongoose.model('Person', PersonSchema,"Persons");
const Person = mongoose.model('Person', PersonSchema);
module.exports = Person