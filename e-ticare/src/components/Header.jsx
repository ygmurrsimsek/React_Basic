import React from 'react'
import { useNavigate } from 'react-router-dom';
import resim from '../images/logo1.png';
import '../componentcss/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { GiMoonBats } from "react-icons/gi";
import { CiLight } from "react-icons/ci";
import { useState } from 'react';
import Badge from '@mui/material/Badge';
function Header() {
    const navigate = useNavigate(); //react-router-dom'un navigate hookunu kullanarak sayfa geçişi yapıyoruz.bunu headerdeki logoya tıklayınca ana sayfaya yani menüye home gitmesi için ayarladık navigate ile sayfa yönlendirmesi yaptık.
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
        <img className='main-logo' onClick={()=>navigate("/")} src={resim} alt="cicek"/>
        <p className='store-name'>Yağmur A.Ş</p>
      </div>
      <div className='flex-row'>
        <input className='search-input'type='text' placeholder='Bir şeyler ara'></input>
        <div>
            {
                /*burada icon değişimini yapıyoruz*/
                lightMode ? <GiMoonBats  className='icons' onClick={Change}/>: <CiLight onClick={Change} className='icons'/> 
            }
            <Badge badgeContent={4} color="error">
              <CiShoppingBasket style={{marginRight:'4px'}}   className='icons'/>
            </Badge>
        </div>
      </div>
    </div>
  )
}

export default Header
