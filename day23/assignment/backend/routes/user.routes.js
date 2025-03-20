const express=require('express');
const { login, signUp } = require('../controllers/user.controllers');

const userRouter=express.Router();

userRouter.post('/login',login);
userRouter.post('/signup',signUp);

module.exports=userRouter;