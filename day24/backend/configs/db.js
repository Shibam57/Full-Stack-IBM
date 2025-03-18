const mongoose=require('mongoose');

const connectDB=mongoose.connect('mongodb+srv://shibamsamantascience:shibam@cluster0.iqkoy.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0');

module.exports={
    connectDB
}