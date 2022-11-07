import React from 'react'
import useTelegram from '../hooks/useTelegram'
import Button from '../Button/Button';
import './Header.css'
export default function Header() {
   const {user, onClose} = useTelegram();
  return (
    <>
   <div className='header'>
    <span className='username'>👋 Welcome {user?.first_name} </span>
   <Button onClick={onClose}>❌</Button>
   </div>
   </>
  )
}

