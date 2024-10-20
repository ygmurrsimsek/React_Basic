import React from 'react'
import resim from '../images/logo1.png';
import '../componentcss/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { GiMoonBats } from "react-icons/gi";
import { CiLight } from "react-icons/ci";
import { useState } from 'react';
function Header() {
    //tıklayınca aydınlık ve karanlık modu ayarlayalım.ilk olarak başlangıc durumu olmalı ona göre değişmeli.
    const [lightMode,setLightMode]=useState(true);
    const Change=()=>{
        const root=document.getElementById('root');
        setLightMode(lightMode);
        if(lightMode){

            root.style.backgroundColor='black';
            root.style.color='white';
            setLightMode(false);
        }
        else{
            root.style.backgroundColor='white';
            root.style.color='black';
            setLightMode(true);
        }
    }
  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>{/*bununla yan yana gelmesini sağladık divlerin ve birini sağa birini sola yasladık.*/}
      <div className='flex-row'>
        <img className='main-logo' src={resim} alt="cicek"/>
        <p className='store-name'>Yağmur A.Ş</p>
      </div>
      <div className='flex-row'>
        <input className='search-input'type='text' placeholder='Bir şeyler ara'></input>
        <div>
            {
                /*burada icon değişimini yapıyoruz*/
                lightMode ? <GiMoonBats  className='icons' onClick={Change}/>: <CiLight onClick={Change} className='icons'/> 
            }
            <CiShoppingBasket   className='icons'/>
        </div>
      </div>
    </div>
  )
}

export default Header
