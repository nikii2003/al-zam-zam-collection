import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './modules/User.js';
import Product from './modules/Product.js';
dotenv.config();

const app = express();

app.use(express.json());

const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn){
        console.log('mongodb connected successfuly')
    }
}
// POST /signup 

app.post("/signup", async (req, res) => {
    const { name, email, password, mobile, address, gender } = req.body;
  
    const user = new User({
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
      gender: gender,
    });
  
    try {
      const savedUser = await user.save();
  
      res.json({
        success: true,
        data: savedUser,
        message: "signup successfully..."
      });
    } catch (err) {
      res.json({
        success: false,
        message: err.message,
      });
    }
  });

  // POST / Login

app.post ('/login', async (req,res)=>{
    const {email,password} =req.body;
    if(!email || !password){
      return res.json({
        success : false,
        message : "please provide email and password"
        })
    }

    const user = await User.findOne({
        email : email,
        password : password
    })

    if(user){
        return res.json({
            success : true,
            data:user,
            message :"login successful"
        })
    }else{
        return res.json({
            success : false,
            message :"invalid creadentials"
        }) 
    }
  
}) ;

// POST /product

app.post('/product', async (req,res)=>{
  const {name,description,price,category,brand,productImage} = req.body;

  const product = new Product ({
    name,
    description,
    price,
    category,
    brand,
    productImage
  })

  const savedProduct = await product.save();

  res.json({
    success : true,
    data : savedProduct,
    message : "created student successfully"
  })
})

//GET/products
//GET/product/id
//GET/Product/search/q ?
//PUT/Product
//DELETE/Product/id/regex
const PORT = process.env.PORT || 5000 ;

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
    connectDB();
})



