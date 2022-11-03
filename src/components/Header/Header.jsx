import React from 'react'
import { useTelegram } from '../hooks/useTelegram'


export default function Header() {
   const {user, onClose} = useTelegram();
  return (
    <>
    <h1>👋 Welcome {user?.username} </h1>
   <button onClick={onClose}>❌</button>
   
   </>
  )
}

