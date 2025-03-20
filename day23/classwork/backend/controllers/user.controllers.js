 const login=(req, res)=>{
    const data=req.body;
    const {email,password}=data;

    try {
        if(!email || !password){
            return res.status(400).send({message:"data not found"});
        }
        else{
            return res.status(200).send({message:"user loggin in successfully"});
        }
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
}

 const signUp=(req, res)=>{
    const data=req.body;

    try {
        if(!data){
            return res.status(400).send({message:"data not found"});
        }
        else{
            return res.status(200).send({message:"user loggin in successfully"});
        }
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
}

module.exports={
    login,signUp
}