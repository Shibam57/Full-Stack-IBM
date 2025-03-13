const express=require('express');
// console.log(express)

const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("welcom to the svu server!")
});

// const data=[
//     {name:"shibam", age:20},
//     {name:"shib", age:20}
// ]
const data=[
]

// app.get("/data",(req,res)=>{
//     res.status(200).send(data)
// });

app.get("/data",(req,res)=>{
    if(!data){
        res.status(400).send("data not found")
    }
    else{
        res.status(200).send(data)
    }
});

app.post("/login",(req,res)=>{
    // console.log(req.body)
    try {
        if(req.body.email==="shibam@gmail.com"){
            res.status(200).send({"message":"usdfiugsduigfsdgf"});
        }
        else{
            res.status(400).send({"message":"not found"});
        }
    } catch (error) {
        
    }
})

const PORT=5500;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})