import React from 'react'
import Button from '../Button/Button'
import './ProductItem.css'
const ProductItem = ({product, onAdd}) => {



    const onAddHandler = ()=>{
        onAdd(product)
    }


  return (
    <div className='list'>
   
<div className={"img"}> <img src={product.image} alt="img" /></div>
<div className={"title" }>{product.title}</div>
<div className={"description" }>{product.description} </div>
<div className={"price"}>
    <span>Price:<b>{product.price} </b></span>
</div>
<Button className="add-btn" onClick={onAddHandler}>
    Добавить в корзину
</Button>
    </div>
    
  )}


export default ProductItem