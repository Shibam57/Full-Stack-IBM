const mongoose=require('mongoose');
const { type } = require('os');

const userSchema=mongoose.Schema({
    username: {
        type:String, 
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const userModel=mongoose.model("user",userSchema);

module.exports={
    userModel
}