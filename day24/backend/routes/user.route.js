const express=require('express');
const { signUp } = require('../controllers/user.controller');

const userRoute=express.Router();
userRoute.post("/register",signUp);

module.exports={
    userRoute
}