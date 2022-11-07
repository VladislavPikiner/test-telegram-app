import { useEffect } from 'react';
import './App.css';
import Header from '../src/components/Header/Header.jsx'
import Button from '../src/components/Button/Button.jsx';
import useTelegram from './components/hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';


function App() {

  const {tg, onToggleButton} = useTelegram(); 
  useEffect(()=>{
    tg.ready();
  },[tg])



  return (
    <>

    
    <Header/>
    <Routes>
      <Route index element={<ProductList/>} />
      <Route path={'form'} element={<Form/>} />
    </Routes>
    <Button onClick={onToggleButton}>toggle✨</Button>
    </>
  );
}

export default App;
