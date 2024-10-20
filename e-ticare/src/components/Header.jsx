import React from 'react'
import resim from '../images/logo1.png';
import '../componentcss/Header.css';
function Header() {
  return (
    <div>
      <div>
        <img className='main-logo' src={resim} alt="cicek"/>
        <p className='store-name'>Yağmur A.Ş</p>
      </div>
    </div>
  )
}

export default Header
