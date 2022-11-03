import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'


const ProductList = (props) => {
  return (
    <>
    <h1>PRODUCTS</h1>

    <Link to='form'> 
    <Button>Form</Button> 
    </Link>
    </>
  )
}


export default ProductList

