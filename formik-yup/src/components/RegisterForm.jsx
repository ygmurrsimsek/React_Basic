import React from 'react'
import { useFormik } from 'formik';
import { RegisterFormYup } from '../shemas/RegisterFormShemas';
function RegisterForm() {
//bu submite 2 snde veri tabanına gitmiş gibi sonra verileri resetleyelim
    const submit=(value,action)=>{
        setTimeout(()=>{
            action.resetForm(); //formu resetlemek için
        },2000);
    }
    const {errors,values,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age:'',
          password:'',
          confirmPassword:'',
          term:false,
        },
        validationSchema:RegisterFormYup,
        onSubmit:submit
    });

return (
<div>
    <div className='appp'>
    <form onSubmit={handleSubmit}>
        <div className='div-ayar'>
            <label>E-mail:</label>
            <input type="text" id="email" placeholder='E-maili giriniz.' onChange={handleChange} value={values.email}/>
            {errors.email && <p className='input-error'>{errors.email}</p>/*erros objesinde email çıktısı varsa onu yazdır*/ }
        </div>
        <div className='div-ayar'>
            <label>Yaş:</label>
            <input type="number" id="age" placeholder='Yaşınızı giriniz.' onChange={handleChange} value={values.age}/>
            {errors.age && <p className='input-error'>{errors.age}</p>/*erros objesinde email çıktısı varsa onu yazdır*/ }
        </div>
        <div className='div-ayar'>
            <label>Şifre:</label>
            <input type="password" id="password"  placeholder='Şifrenizi giriniz.' onChange={handleChange} value={values.password}/>
            {errors.password && <p className='input-error'>{errors.password}</p>/*erros objesinde email çıktısı varsa onu yazdır*/ }
        </div>

        <div className='div-ayar'>
            <label>Şifre Tekrarı:</label>
            <input type="password" id="confirmPassword"  placeholder='Tekrar şifrenizi giriniz.' onChange={handleChange} value={values.confirmPassword}/>
            {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>/*erros objesinde email çıktısı varsa onu yazdır*/ }
        </div>
        <div className='div-ayar'>
            <input type="checkbox" style={{width:'25px'}} id="term" onChange={handleChange} value={values.term}/>
            <label>Kullanıcı sözleşmesini onaylıyorum.</label>
            {errors.term && <p className='input-error'>{errors.term}</p>/*erros objesinde email çıktısı varsa onu yazdır*/ }
        </div>
        <button type='submit' className='button'>Kaydet</button>
       
    </form>
    </div>
    
</div>
  )
}

export default RegisterForm
