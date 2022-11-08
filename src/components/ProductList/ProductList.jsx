import {useState,useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import useTelegram from '../hooks/useTelegram'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.css'

const getTotalPrice = (items) =>{
 return items.reduce((acc, item)=>{
  return acc += item.price
 },0)
}

const ProductList = (props) => {
  const [addedItems, setAddedItems] = useState([])
  const [products, setProducts] = useState([])
  
  
  const {tg, queryId} = useTelegram()

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

  if(newItems.length === 0){
    tg.MainButton.hide()
  }else{
    tg.MainButton.show();
    tg.MainButton.setParams({
    text:`Оформить заказ на ( ${getTotalPrice(newItems)} )`
    })
  }
}

const onSendData = useCallback(() => {
  const data = {
    products: addedItems,
    totalPrice: getTotalPrice(addedItems),
    queryId,
  }    
  fetch('http://localhost:3000',{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data)

  })
  
}, [addedItems,queryId])

useEffect(() => {
  tg.onEvent('mainButtonClicked', onSendData)
  
  return () => {
    tg.offEvent('mainButtonClicked', onSendData)
}
}, [onSendData,tg])

  return (
    <>
    <h1 className='title'>PRODUCTS:</h1>
    <h3 className='title title-price'>Total: {getTotalPrice(addedItems)}</h3>
    <section className="list">
{products.map(product=>{
  return <ProductItem key={product.id} product={product} onAdd={onAdd} />
})}
</section>
    <Link to='form'> 
    <Button>Form</Button> 
    </Link>
    </>
  )
}


export default ProductList

