const express=require('express');
const { login, signUp } = require('../controllers/user.controllers');


const userRouter=express.Router();

userRouter.post("/signup",signUp);

userRouter.post("/login",login);

module.exports=userRouter;