const express=require('express');
const { connectDB } = require('./configs/db');
const { CURSOR_FLAGS } = require('mongodb');
const { userRoute } = require('./routes/user.route');
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("ihdifhi");
})

app.use(userRoute);

const PORT=4000;

app.listen(PORT,async()=>{
    try {
        await connectDB
        console.log("db is connected")
        console.log(`server runnitng: http://localhost:${PORT}`)
    } catch (error) {     
        console.log(error)
    }
})