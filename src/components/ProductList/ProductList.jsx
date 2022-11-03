import React from 'react'
import { Link } from 'react-router-dom'


const ProductList = (props) => {
  return (
    <>
    <h1>PRODUCTS</h1>

    <Link to='form'> 
    <button>Form</button> 
    </Link>
    </>
  )
}


export default ProductList

