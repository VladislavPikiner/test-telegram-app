import { useEffect } from 'react';
import './App.css';
import Header from '../src/components/Header/Header.jsx'
import Button from '../src/components/Button/Button.jsx';
import { useTelegram } from './components/hooks/useTelegram';


function App() {

  const {tg, onToggleButton} = useTelegram(); 
  useEffect(()=>{
    tg.ready();
  },[])



  return (
    <>
    <Header/>
    
    <button onClick={onToggleButton}>toggle✨</button>
    </>
  );
}

export default App;
