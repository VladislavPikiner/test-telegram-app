import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
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
