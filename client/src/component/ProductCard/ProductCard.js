import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'
function ProductCard({id,name,description,price,category,brand,productImage}) {
  return (
    <div className='product-card-flex-container'>
        <img src={productImage} className='product-image'/>
      <h3 className='product-name'>{name}</h3>
      <p className='product-description'>{description}</p>
     <h2 className='product-price'>{price}</h2>
     <Link  to={`/buy/${id}`}className='btn-buy-now'>Buy Now</Link>
    </div>
  )
}

export default ProductCard