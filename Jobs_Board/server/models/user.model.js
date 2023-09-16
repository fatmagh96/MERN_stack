const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
const {NoteSchema} = require('./job.model')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "username is required"],
        minlength: [3, "minimum length is 3"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        validate: [isEmail, "Email not valid"],
        unique: [true, "email already in use"]
        // validate: {
        //     validator: val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
        //     message: "PLEASE ENTER A VALID EMAIL"
        // }
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "password minimum length is 6"]
    },
    notes : [NoteSchema]

})

UserSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword)
.set(value=>this._confirmPassword = value)

UserSchema.pre('validate',function(next){
    console.log('INSIDE VALIDATE CONFIRM PASSWORD');
    console.log(`Password: ${this.password} \n Confirm password : ${this.confirmPassword}`);
    if (this.password != this.confirmPassword){
        this.invalidate('confirmPassword', 'Password Must match')
    }
    next()
})

UserSchema.pre('save', async function(next){
    console.log('Inside Pre Save Hook');
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10);
        console.log('PASSWORD text : ',this.password,'\nPASSWORD hashed : ',hashedPassword);
        this.password= hashedPassword
    }
    catch(error){
        console.log(error);
    }
    next()
})
const User = mongoose.model("User", UserSchema)
module.exports = User