import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './modules/User.js';
dotenv.config();

const app = express();

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn){
        console.log('mongodb connected successfuly')
    }
}
connectDB();

app.get('/users', async (req,res)=>{
    const users= await User.find();
    res.json({
    success:true,
    data:users,
    message:" all info "
    })
})
app.post('/signup', async (req,res)=>{
    const{name,email,password,mobile,address,gender}=req.body;
     
    const newUser = new User({
     name,
     email,
     password,
     mobile,
     address,
     gender
    })
   try {
    const savenewUser = await newUser.save();
    res.json({
      success:true,
      data:savenewUser,
      message:"successfully add products"
    })
   } catch (error) {
    
   }
})

const PORT = process.env.PORT || 5000 ;

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})


