import { Schema,model } from "mongoose";

const productSchema = new Schema ({
    name:{
        type : String,
        required : true
    },
    description:{
        type : String,
    },
    price:{
        type : String,
    },
    category:{
        type : String ,
    },
    brand:{
        type : String,
        required : true
    },
    productImage:{
        type : String ,
        required : true
    }
},
{
    timestamps : true,
})

const Product = model ('Product',productSchema)

export default Product