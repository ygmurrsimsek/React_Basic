import React from 'react'
import { useNavigate } from 'react-router-dom';
function Product({product}) {
  const navigate=useNavigate();
  const {id, name, price} = product;
  return (
    <div>
      <div>Ürün bilgileri</div>
      <h3>Ürün İsmi:{name}</h3>
        <br></br>
        <h3>Ürün Fiyatı: {price}</h3>
        <button onClick={()=>{navigate("/product-details/"+id)}}>Ürün detayına git</button>
        <hr></hr>

    </div>
  )
  //butona tıklayınca urlye product-details gönderir .
}

export default Product
