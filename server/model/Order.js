import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    ordershipping: {
      type: String,
      required : true
    },
    deliverycharges: {
      type : String
    },
    status: {
      type: String,
      default: "pendding",
    },
  },
  {
    timestamps: true,
  }
);

const Order = model('Order', orderSchema);

export default Order;
