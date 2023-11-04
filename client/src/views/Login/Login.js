import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState ();
  const [password,setPassword] = useState ();

  const login =  async ()=>{
    const response = await axios.post("/login", {
      email : email,
      password : password
    })
    if(response?.data?.success ){
      alert(response?.data?.message)
      window.location.href = "/"
    }
  }
  return (
    <div>
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
          <button type='button' className='btn login-btn' onClick={login}>Login</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login