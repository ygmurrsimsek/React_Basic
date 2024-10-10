import React, { useState } from 'react'; // useState doğru yazıldı
import '../css/currensy.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

  const BASE_URL="https://api.freecurrencyapi.com/v1/latest";
  const API_KEY="fca_live_FLlZequi1vh6iWiyWMHL8ldMrpxRQZDe3PdXHGsD";
function Currensy() {
  
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('TRY');
    const [result, setResult] = useState(0);
  
  const exchange=async()=>{

    //biz butona basınca veriler gelsin ve çevirmeler yapılsın bunun için
    //axios kütüphanesini import edip get metodu kullanıcaz.
    const response=await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${from}`);
    const sonuc=(response.data.data[to])*amount;
    setResult(sonuc.toFixed(2));

  }
  return (
    <div className='div-currensy'>
      <div style={{marginTop:'-20px',fontFamily:'arial',backgroundColor:'black',color:'white' ,width:'100%',marginBottom:'25px'}}>
        <h3 style={{textAlign:'center'}}>DÖVİZ KURU UYGULAMASI</h3>
      </div>

      <div clasName='currensy-div'>
        <input type="number" className='amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        {console.log(amount)}
        <select className='from-currensy-option' value={from} onChange={(e)=>setFrom(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TL">TRY</option>
        </select>

          <FaRegArrowAltCircleRight style={{
            fontSize: '25px',
            marginLeft: '10px',
            marginRight: '10px',
            color:'black'

          }} />

        <select className='to-currensy-option' value={to} onChange={(e)=>setTo(e.target.value)}>
          <option value="TL">TRY</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>

        <input type="number" className='result' value={result} onChange={(e)=>setResult(e.target.value)}/>
      </div>

      <div className='button'>
        <button onClick={exchange} className='button-exchange'>Çevir</button>
      </div>
      
    </div>
  )
}

export default Currensy
