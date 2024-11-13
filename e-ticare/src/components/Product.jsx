import React from 'react'
import '../App.css';
import '../componentcss/Product.css';
function Product({product}) {
    console.log(product);
  const {id,price,image,title,description}=product;
  return (
    <div className='card'>
        <img className= 'image' src={image}></img>
        <p style={{textAlign:'center',height:'80px'}}>{title}</p>
        <h3 style={{textAlign:'center'}}>{price}₺</h3>
        <div  className='flex-row'>
            <button className='button-Details'>Detayına Git</button>
        </div>
    </div>
  )
}

export default Product
