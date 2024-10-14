import React from 'react'
import { Link } from 'react-router-dom'
import '../ComponentCss/component.css'
function Header() {
  return (
    //Anasayfaya tıklandığında Urlin uzantısı şu olan componenti çalıştırır fakat bizde router arasında bu componentler o yüzden app.jsx e import edilmeli.
    <div className='one' >
      <Link className='link' to='/'>Anasayfa</Link>
      <Link className='link' to='/about'>Hakkında</Link>
      <Link className='link' to='/contact'>İletişim</Link>
      <Link className='link' to='/product'>Ürünlerimiz</Link>

    </div>
  )
}

export default Header
