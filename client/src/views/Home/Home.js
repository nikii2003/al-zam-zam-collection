import React, { useEffect, useState } from 'react'
import "./Home.css"
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'
import ProductCard from '../../component/ProductCard/ProductCard.js'
import Footer from '../../component/Footer/Footer.js'
function Home() {

  const [products,setProducts]=useState([])

const loadProducts = async () =>{
try {
  const response = await axios.get("/products");
setProducts(response?.data?.data)
} catch (error) {
  console.log(error)
  alert("error loading products")
}
}

  useEffect (()=>{
    loadProducts();
  })
  return (
    <div>
        <Navbar/>
       <div className='product-card-container'>
        {
          products?.map((product,index)=>{
            const {_id,name,description,price,category,brand,productImage}=product;
            return(
              
                <ProductCard name={name} 
                productImage={productImage} 
                description={description}
                price={price}
                category={category}
                brand={brand}
                 key={index}
                 id={_id}
                 />
               
            )
          })
        }
      </div>
      <Footer/>
    </div>
 
  )
}

export default Home