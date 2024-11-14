import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../App.css';
import '../componentcss/Product.css';
function Product({product}) {
  const navigate =useNavigate();
  const {id,price,image,title,description}=product;

  return (
    <div className='card'>
        <img className= 'image' src={image}></img>
        <p style={{textAlign:'center',height:'80px'}}>{title}</p>
        <h3 style={{textAlign:'center'}}>{price}₺</h3>
        <div  className='flex-row'>
            <button className='button-Details' onClick={()=> navigate("/product-details/" + id)}>Detayına Git</button> 
        </div>
    </div>
  )
}

export default Product
