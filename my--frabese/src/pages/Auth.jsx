import React from 'react'

function Auth() {
  return (
    <div className='auth'>
      <h3>Giriş Yap /Kayıt Ol</h3>
      <div className='input-div'>
        <input type='text' placeholder='E-mail giriniz.' className='input'></input>
        <input type='password' placeholder='Şifre giriniz.' className='input'></input>
      </div>
      <div className='button-div'>
        <button className='button'>Giriş Yap</button>
        <button className='button'>Kayıt Ol</button>

      </div>
    </div>
  )
}

export default Auth
