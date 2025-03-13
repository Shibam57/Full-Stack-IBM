const express=require('express');

const app=express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("welcome to the svu server!")
});

// const data=[
//     {name:"shibam",age:21},
//     {name:"rahul",age:20},
//     {name:"hi",age:20}
// ]

// app.get("/data",(req,res)=>{
//     if(!data){
//         res.status(400).send("data not found")
//     }
//     else{
//         res.status(200).send(data);
//     }
// });

app.post("/data",(req,res)=>{
    console.log(req.body)
    if(req.body.name==="shibam_samanta"){
        res.status(200).send({"cxhfvsdoigvodshvo;d":"gjhdf"})
    }
    else{
        res.status(400).send({"jdfihdi":"hjygi"});
    }
});

const PORT=2000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})