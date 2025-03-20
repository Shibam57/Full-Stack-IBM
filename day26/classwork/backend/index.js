const express=require('express');

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("iehri");
})

const PORT=4000;

app.listen(PORT,()=>{
    console.log(`server running on port http://localhost:${PORT}`)
})