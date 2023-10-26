import { Schema,model } from "mongoose";

const userSchema = new Schema ({
  name:String,
  email:String,
  password:String,
  mobile:String,
  address:String,
  gender:String
})

const User = model('User', userSchema)

export default User