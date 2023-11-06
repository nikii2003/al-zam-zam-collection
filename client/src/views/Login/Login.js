import React, { useEffect, useState } from 'react'
import "./Login.css"
import axios from 'axios';
import { Link, json } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';

function Login() {
  const [email, setEmail] = useState ();
  const [password,setPassword] = useState ();

  const login =  async ()=>{
    const response = await axios.post("/login", {
      email : email,
      password : password
    })
    alert(response?.data?.message)
    if(response?.data?.success ){
      localStorage.setItem("user",JSON.stringify(response?.data?.data))
      window.location.href = "/"
    }
  }

  useEffect(()=>{
  const storageuser = JSON.parse(localStorage.getItem("user" || '{}'));
  if(storageuser?.email){
    alert("you aready logged in !");
    window.location.href="/"
  }
  },[])
  return (
    <div>
      <Navbar/>
      <div className='login-continer'>
        <form>
          <h1 className='text-center'>Login</h1>
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

        <div>
          <button type='button' className='btn login-btn' onClick={login}>Login</button><br/><br/>
          <Link to="/signup" className='register-first-link'>Register Now</Link>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login