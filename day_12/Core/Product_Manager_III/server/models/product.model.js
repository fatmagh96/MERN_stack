const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type:String,
        // required: [true, "First Name is required!!"],
        // minlength: [3, "First Name must be at least 3 characters long!!"]
    },
    price: {
        type:Number,
        // required: true,
        // minlength: [3, "Last Name must be at least 3 characters long!!"]
    },
    description: {
        type:String,
        // required: [true, "{PATH} is very required"],
        // min: 1,
        // max: 120
    },

}, {timestamps:true})

// const Product = mongoose.model('Product', ProductSchema,"Products");
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product