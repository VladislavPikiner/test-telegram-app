import React from 'react'

const tg = window.Telegram.WebApp;
export default function Header() {
    const onClose = () =>{
        tg.close()
      }
  return (
    <>
    
   <button onClick={onClose}>Закрыть</button>
   <span className="username">{tg.initDataUnsafe?.user?.username}</span>
   </>
  )
}

