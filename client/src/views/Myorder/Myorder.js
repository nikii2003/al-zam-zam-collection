import React, { useState } from 'react'
import "./Myorder.css"
import Navbar from '../../component/Navbar/Navbar';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const STATUS_BAGED_COLOR_MAP = {
  "pendding":"baged-danger",
  "delivered":"baged-success",
  "shipped":"baged-warning"
}

function Myorder() {
    const [user,setUser] = useState({})
    const [order,setOrders] = useState([])

   
useEffect (()=>{
const storageuser = JSON.parse(localStorage.getItem("user") || '{}');
if(storageuser?.email){
setUser(storageuser)
}else{
    alert("you are not logged in !");
    window.location.href="/login"
}

},[])

const loadProduct = async() =>{
  const userId=user._id
  if(!userId){
    return;
  }
const response = await axios.get(`/order/user/${user._id}`);
setOrders(response?.data?.data)
}
useEffect(()=>{
loadProduct();
},[user])
  return (
    <div>
        <Navbar/>
        <h1 className='orer-heading'>Myorder</h1>
        <div>
{
  order?.map((orders,index)=>{
    const {product,quantity,status,deliverycharges} =orders;
    const totalPrice = product.price * quantity;
   return(
<div className='myorders-card'>
  <Link to={`/buy/${product._id}`} className='name-link'>Your Product Name : {product.name}</Link>
  <h4>Product Quantity: {product.price} × {quantity} = {totalPrice}</h4>
  {/* <h4>Product Quantity : {product} × {quantity} = {product * quantity}</h4> */}

  <p className={`order-status ${STATUS_BAGED_COLOR_MAP[status]}`}>{status}</p>
 
  </div>
   )
  })
}
</div>
    </div>
  )
}
export default Myorder