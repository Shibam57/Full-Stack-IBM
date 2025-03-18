const mongoose=require('mongoose');
const {type}=require('os');

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true
    }
})

const userModel=mongoose.model("user",userSchema);

model.exports={
    userModel
}