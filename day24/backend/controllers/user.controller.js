const { userModel } = require("../models/user.model");
const bcrypt=require('bcrypt')

const signUp=async(req,res)=>{
    // const data=req.body;
    const {username,email,password}=req.body;
    try {
        bcrypt.hash(password, 5, async(err, hash)=> {
            if(err){
                return res.status(400).sent({error:err})
            }
            else{
                const userData=await userModel({username,email,password:hash});
                await userData.save();

                return res.status(200).send({message:"user registered successfully"})
            }
            
        });
        
    } catch (error) {
        return res.status(400).send({error:error.message})
    }
}

module.exports={
    signUp
}