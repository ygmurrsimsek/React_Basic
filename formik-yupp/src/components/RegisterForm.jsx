import React from 'react'
import { useFormik } from 'formik';

function RegisterForm() {
    const {values,errors,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',    
          age:'',
          password:'',
          confirmPassword:'',
          term:'',
        }
    });
return (
<div>
    <form>
        <div>
            <label>Email</label>
            <input type='text' id='email' placeholder='Email giriniz' value={values.email} onChange={handleChange}></input>
        </div>
        <div>
            <label>Yaş</label>
            <input type='number' id='age' placeholder='Yaşınızı giriniz' value={values.age}  onChange={handleChange}></input>
        </div>
        <div>
            <label>Şifre</label>
            <input type='password' id='password' placeholder='Şifrenizi giriniz' value={values.password}  onChange={handleChange}></input>
        </div>
        <div>
            <label>Şifre Tekrarı</label>
            <input type='password' id='ConfirmPassword' placeholder='Tekrar şifrenizi giriniz' value={values.confirmPassword}  onChange={handleChange}></input>
        </div>
        <div>
            <input type='checkbox' id='term' value={values.term}  onChange={handleChange}></input>
            <label>KUllanıcı sözleşmesini kabul ediyorum.</label>
        </div>
    </form>
</div>
)
}

export default RegisterForm
