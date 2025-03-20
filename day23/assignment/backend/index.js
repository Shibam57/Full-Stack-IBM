const express=require('express');
const userRouter = require('./routes/user.routes');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(400).send(`<h1 style="color:red;">wellcome</h1>`)
})

app.use(userRouter);

const PORT=4000;
app.listen(PORT,()=>{
    console.log(`server is running at port http://localhost:${PORT}`);
})