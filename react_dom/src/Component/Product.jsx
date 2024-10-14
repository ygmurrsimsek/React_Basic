import React from 'react'

function Product({product}) {
    const {id, name, price} = product;
  return (
    <div>
      <div>Ürün bilgileri</div>
      <div>Ürün İsmi:{name}
        <br></br>
        Ürün Fiyatı: {price}
        <hr></hr>
      </div>
    </div>
  )
}

export default Product
