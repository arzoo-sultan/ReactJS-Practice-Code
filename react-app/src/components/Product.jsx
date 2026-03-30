import React from 'react'
import './Product.css'
 const Product = ({name,price}) => {
  return (
    <div className='Product'>
        <h3>Props and Components Example</h3>
        <p>Product:{name}</p>
        <p>Price :{price}</p>
        </div>
  )
}
export default Product;