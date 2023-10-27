import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./modules/User.js";
import Product from "./modules/Product.js";
dotenv.config();

const app = express();

app.use(express.json());

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  if (conn) {
    console.log("mongodb connected successfuly");
  }
};
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
      message: "signup successfully...",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

// POST / Login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      success: false,
      message: "please provide email and password",
    });
  }

  const user = await User.findOne({
    email: email,
    password: password,
  });

  if (user) {
    return res.json({
      success: true,
      data: user,
      message: "login successful",
    });
  } else {
    return res.json({
      success: false,
      message: "invalid creadentials",
    });
  }
});

// POST /product

app.post("/product", async (req, res) => {
  const { name, description, price, category, brand, productImage } = req.body;

  const product = new Product({
    name,
    description,
    price,
    category,
    brand,
    productImage,
  });

  try {
    const savedProduct = await product.save();

    res.json({
      success: true,
      data: savedProduct,
      message: "product created successfuly....",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
});

//GET/products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json({
    success: true,
    data: products,
    message: "Successfully Find All Products......",
  });
});
//GET/product/id

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;

  const productFind = await Product.findById({ _id: id });
  res.json({
    success: true,
    data: productFind,
    message: "successfuly find product",
  });
});

//PUT/Product

app.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, brand, productImage } = req.body;

   await Product.updateOne(
    { _id: id },
    {
      $set: {
        name : name,
        description : description,
        price : price,
        category : category,
        brand : brand,
        productImage : productImage
      }
    }
  );

  const updateProduct = await Product.findOne({ _id: id });
console.log(updateProduct)
  res.json({
  success : true,
  data :updateProduct,
  message : "successfully update product....."
  });
});

//GET/Product/search/regex ?
app.get('/product', async (req,res)=>{
const {q} = req.query;
const regexproduct = await Product.find({name : {$regex : q , $options : 'i'}})

res.json({
  success : true,
  data : regexproduct,
  message : "successfully find product"
})
})
//DELETE/Product/id/

app.delete('/product/:id',async (req,res)=>{
  const {id}=req.params;
await Product.deleteOne({_id:id})
  res.json({
    success : true,
    message :"succesfuly deleted product..."
  })
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
  connectDB();
});
