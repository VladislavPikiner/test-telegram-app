import React, {useState, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useTelegram } from '../hooks/useTelegram';
import './Form.css'


const Form = () => {
    
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

const onSendData = useCallback(() => {
    const data = {
        country,
        city,
        subject
    }    
tg.sendData(JSON.stringify(data))

  }, [country, city, subject])

useEffect(() => {
  tg.onEvent('mainButtonClicked', onSendData)

  return () => {
    tg.offEvent('mainButtonClicked', onSendData)
  }
}, [onSendData])



useEffect(()=>{
    tg.MainButton.setParams({text:'Оформить запись'})
},[tg.MainButton])

useEffect(()=>{
    if(!country || !city){
        tg.MainButton.hide()
    }else{
        tg.MainButton.show()
    }
},[country, city,tg])

    const onChangeCountry = (e) =>{
        setCountry(e.target.value)
    }

    const onChangeCity = (e) =>{
        setCity(e.target.value)
    } 
    
    const onChangeSubject = (e) =>{
        setSubject(e.target.value)
    }


  return (

    <div className={'form'}>

    <h1>Form</h1>
    <Link to={'/'}><Button>ProductList </Button></Link>

    <h3>Enter your data please:</h3>

    <input onChange={onChangeCountry} className='input' type="text" placeholder={'Country'} value={country} />

    <input onChange={onChangeCity} className='input' type="text" placeholder={'City'} value={city} />
   <select onChange={onChangeSubject} className='select' value={subject}>
    <option value={'legal'}>Corp</option>
    <option value={'physical'}>Small Business</option>
   </select>

</div>
  )
}

export default Form