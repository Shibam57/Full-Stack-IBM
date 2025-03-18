const express=require('express');

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("khdofg9edifgn");
})

const PORT=8080;

app.listen(PORT,()=>{
    console.log(`server running: http://localhost:${PORT}`)
})
