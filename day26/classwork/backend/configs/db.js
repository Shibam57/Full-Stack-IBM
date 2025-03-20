const mongoose=require('mongoose');

const connectDB=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.error(error.message);
    }
}

module.exports=connectDB;