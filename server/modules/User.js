import { Schema,model } from "mongoose";

const userSchema = new  Schema({
  name :{
    type : String,
    default : "-",
  },
  email : {
    type : String,
    required : true,
    unique : true,
  },
  password : {
    type : String ,
    required : true,
  },
  mobile : {
    type : String ,
    required : true,
    unique : true, 
  },
  address : {
    type : String ,
  },
  gender : {
    type : String,
    default : "prefer not to say.."
  }
})

const User = model("User", userSchema)

export default User