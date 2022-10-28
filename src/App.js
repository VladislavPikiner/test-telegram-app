import { useEffect } from 'react';
import './App.css';
import Header from '../src/components/Header/Header.jsx'
import Button from '../src/components/Button/Button.jsx';
const tg = window.Telegram.WebApp;

function App() {

  useEffect(()=>{
    tg.ready();
  },[])



  return (
    <>
    <Header/>
    <Button/>
    </>
  );
}

export default App;
