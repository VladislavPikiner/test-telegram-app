import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Form.css'


const Form = () => {

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');

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

    <form className={'form'}>

    <h1>Form</h1>
    <Link to={'/'}><Button>ProductList </Button></Link>

    <h3>Enter your data please:</h3>

    <input onChange={onChangeCountry} className='input' type="text" placeholder={'Country'} value={country} />
    <input onChange={onChangeCity} className='input' type="text" placeholder={'City'} value={city} />
   <select onChange={onChangeSubject} className='select' value={subject}>
    <option value={'legal'}>Corp</option>
    <option value={'physical'}>Small Business</option>
   </select>

</form>
  )
}

export default Form