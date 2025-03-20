const express=require('express');
const cors=require('cors');
const { userRouter } = require('./routes/user.route');
const { productRouter } = require('./routes/products.route');
const { connectDB } = require('./configs/db');
require('dotenv').config()

const app=express();
app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("welcondndk hsdssd");
});

app.use("/api/auth",userRouter);

app.use("/api",productRouter)


app.listen(process.env.PORT, async()=>{
    try {
        await connectDB
        console.log("DB is connected");
        console.log(`server is running at http://localhost:${process.env.PORT}`)
    } catch (error) {
        console.log(error.message);
    }
})