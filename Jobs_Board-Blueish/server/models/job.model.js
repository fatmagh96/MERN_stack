const mongoose  = require('mongoose')
// const UserSchema = require('./user.model');

const JobSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Job Title is required ❌❌❌"],
        minlength:[3, "Title must be at least 3 characters ⛔⛔⛔"]
    },
    company:{
        type:String,
        required:[true, "Company must be present 🛑🛑🛑"],
        minlength:[3, "Company is Too short 🤬🤬🤬"]
    },
    isRemote : {
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        default: 'Pending'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, {timestamps:true});

const Job = mongoose.model('Job', JobSchema);
module.exports = {Job, JobSchema} ;