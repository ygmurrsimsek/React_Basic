import React from 'react'
import { useParams } from 'react-router-dom'
import ürünler from '../data/Product.json';
import Product from '../Component/Product.jsx';
function ProductDetails() {
  const { id }=useParams(); 
  return (
    <div>
      <h1>Ürün detayı</h1>
      <hr></hr>
      {
        ürünler && ürünler.map((ürünler) => { 
          if(ürünler.id== id){
            return <Product product={ürünler}/>
          }
        })
      }
    </div>
  )
}

export default ProductDetails
