import React from 'react'
import Products from '../Component/Product.jsx';
const ürünler=[
  {
    id:'1',
    name:'Bilgisayar',
    price:50000
  },

  {
    id:'2',
    name:'Televizyon',
    price:15000
  },
  {
    id:'3',
    name:'Telefon',
    price:20000
  }
]
function Product() {
  return (
    <div>
      {
        ürünler && ürünler.map((product)=>(
          <Products key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default Product
