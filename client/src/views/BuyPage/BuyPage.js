import React, { useEffect, useState } from 'react'
import "./BuyPage.css"
import { useParams } from 'react-router-dom'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios';
function BuyPage() {

    const {id} = useParams();
    const [product,setProduct]=useState({});
    const [quantity,setQuantity]=useState(1);
    const [shippingaddress,setShippingAdd]=useState('')

    const loadProduct = async ()=>{

        if(!id){
            return ;
        }
        const response = await axios.get(`/product/${id}`)
        setProduct(response?.data?.data)
    }

    useEffect (()=>{
    loadProduct();
    },[])

const productQuantityInc = ()=>{
setQuantity(quantity +1)

}
const productQuantityDec = () =>{
  if(quantity===1){
    return
  }
setQuantity(quantity -1)
}
const placeorder = async() =>{
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');

const orderDetails = {
  user:currentUser._id,
  product:id,
  quantity:quantity,
  ordershipping:shippingaddress
}

const response = await axios.post('/order',orderDetails);
alert(response?.data?.message);
if(response?.data?.success){
  window.location.href="/orders";
}
}
  return (
    <div>
        <Navbar/>
        <div className='flex-box'>
        <div>
        <img src={product.productImage} className='img' alt='product-image'/>
        </div>
       <div className='product-detail-div'>
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
       <p>{product.description}</p>
       <span onClick={productQuantityInc} className='btn-quantity'>+</span>
       <span className='quantity-text'>{quantity}</span>
       <span className='btn-quantity' onClick={productQuantityDec}>-</span>
       <div><input type='text' 
       placeholder='Enter shipping Address' 
       value={shippingaddress}
       className='shipping-add-input'onChange={(e)=>{
        setShippingAdd(e.target.value)
       }}/></div>
        <button type='button' className='place-order-btn'
        onClick={placeorder}>place Order</button>
      </div>
    
      </div>
    </div>
  )
}

export default BuyPage