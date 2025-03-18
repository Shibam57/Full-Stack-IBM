const signUp=async(req,res)=>{
    const data=req.body;
    const userData=await userModel(data.password);
    await userData.save();

    return res.status(200).send({message:"user registered successfully"})
}

module.exports={
    signUp
}