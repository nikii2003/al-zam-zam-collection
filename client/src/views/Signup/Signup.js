import React, { useState } from 'react'
import './Signup.css'
import image from './../../../../client/src/views/Signup/Sign up-rafiki.png';
import axios from 'axios'

export default function Signup() {

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password ,setPassword]=useState()
    const [mobile,setMobile] =useState ()
    const [address ,setAddress]=useState()
    const [gender,setGender]=useState('female')


    const signupformore = async ()=>{
        if(!name){
            alert('name is required');
            return;
        }
        if(!email){
            alert('email is required');
            return;
        }
        if(!password){
            alert('password is required');
            return;
        }
        if(!mobile){
            alert('mobile is required');
            return;
        }
        if(!address){
            alert('address is required');
            return;
        }

  const response = await axios.post('/signup',{
    name : name,
    email : email,
    password : password,
    mobile : mobile,
    address : address,
    gender : gender
  })
 if(response?.data?.success){
alert(response?.data?.message);
window.location.href="/login"
 }else{
alert(response?.data?.message);
 }
    }
  return (
    <div>
<div>
    <form className='signup-form-container'>
   
        <h1 className='text-center heading'>Signup</h1>
    
        <div className='div-input-field'>
            <label htmlFor='name'>Name:</label>
            <input type='text' 
            placeholder='Enter name' 
            id='name' 
            value={name}
            onChange={(e)=>{setName(e.target.value)}} 
            className='input-box input-box-container'/>
        </div>
        <div className='div-input-field'>
            <label htmlFor='email'>Email:</label>
            <input type='email' 
            placeholder='Enter email' 
            id='email' 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className='input-box input-box-container'/>
        </div>
        <div className='div-input-field'>
            <label htmlFor='password'>password:</label>
            <input type='password' 
            placeholder='Enter password' 
            id='password' 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className='input-box input-box-container'/>
        </div>
        <div className='div-input-field'>
            <label htmlFor='mobile'>Mobile:</label>
            <input type='text' 
            placeholder='Enter Mobile' 
            id='mobile' 
            value={mobile}
            onChange={(e)=>{setMobile(e.target.value)}}
            className='input-box input-box-container'/>
        </div>
        <div className='div-input-field'>
            <label htmlFor='address'>Address:</label>
            <input type='text' 
            placeholder='Enter Address' 
            id='address' 
            value={address}
            onChange={(e)=>{setAddress(e.target.value)}}
            className='input-box input-box-container'/>
        </div>
      
        <div className=''>
         <img src={image} className='vector-image'/>
         </div>
        <div>
             
            <input type='radio'  
            id='male' 
            name='gender' 
            className='gender-1' 
            checked={gender === "male"}
            onClick={()=>{
                setGender("male")
            }}/>
            <label htmlFor='male'>male</label>
         
            <input type='radio' 
            id='female' 
            name='gender' 
            className='gender-2' 
            checked={gender==="female"}
            onClick={()=>{
                setGender("female")
            }}/>
            <label htmlFor='female'>female</label>
        </div>

        <button type='button' className='btn signup-btn' onClick={signupformore}>Signup</button>
    </form>

</div>
    </div>
  )
}
