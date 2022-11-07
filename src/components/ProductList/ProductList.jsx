import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.css'

const ProductList = (props) => {
  const [addedItems, setAddedItems] = useState([])

  const [products, setProducts] = useState([])

useEffect(() => {
  async function getProducts (){
   await fetch('https://fakestoreapi.com/products?limit=5')
    .then(res=>res.json())
    .then(items=>setProducts(items))


  }
  getProducts()
}, [])

const onAdd = (product) =>{
  const alreadyAdded = addedItems.find(item=>item.id === product.id)

  let newItems = [];

  if(alreadyAdded){
newItems = addedItems.filter(item=>item.id !== product.id)
  }else{
    newItems = [...addedItems, product]
  }

  setAddedItems(newItems)
}

  return (
    <>
    <h1 style={{textAlign:'center'}}>PRODUCTS:</h1>
{products.map(product=>{
  return <ProductItem key={product.id} product={product} onAdd={onAdd} />
})}
    <Link to='form'> 
    <Button>Form</Button> 
    </Link>
    </>
  )
}


export default ProductList

