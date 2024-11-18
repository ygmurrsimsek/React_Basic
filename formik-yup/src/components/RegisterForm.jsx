import React from 'react'
import { useFormik } from 'formik';
function RegisterForm() {
    const {errors,values,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age:'',
          password:'',
          confirmPassword:'',
          term:false,
        }
    });
return (
<div>
    <div className='appp'>
    <form>
        <div>
            <label>E-mail:</label>
            <input type="text" id="email" placeholder='E-maili giriniz.' onChange={handleChange} value={values.email}/>
        </div>
        <div>
            <label>Yaş:</label>
            <input type="number" id="age" placeholder='Yaşınızı giriniz.' onChange={handleChange} value={values.age}/>
        </div>
        <div>
            <label>Şifre:</label>
            <input type="password" id="password"  placeholder='Şifrenizi giriniz.' onChange={handleChange} value={values.password}/>
        </div>

        <div>
            <label>Şifre Tekrarı:</label>
            <input type="password" id="confirmPassword"  placeholder='Tekrar şifrenizi giriniz.' onChange={handleChange} value={values.confirmPassword}/>
        </div>
        <div>
            <input type="checkbox" style={{width:'25px'}} id="term" onChange={handleChange} value={values.term} />
            <label>Kullanıcı sözleşmesini onaylıyorum.</label>
        </div>
        <button className='button'>Kaydet</button>
       
    </form>
    </div>
    
</div>
  )
}

export default RegisterForm
