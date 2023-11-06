import React, { useState } from 'react'
import "./Myorder.css"
import Navbar from '../../component/Navbar/Navbar';
import { useEffect } from 'react';

function Myorder() {
    const [user,setUser] = useState({})
useEffect (()=>{
const storageuser = JSON.parse(localStorage.getItem("user") || '{}');
if(storageuser?.email){
setUser(storageuser)
}else{
    alert("you are not logged in !");
    window.location.href="/login"
}

},[])
  return (
    <div>
        <Navbar/>
        <h1>Myorder</h1>
    </div>
  )
}

export default Myorder