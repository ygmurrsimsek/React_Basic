// import React from 'react'

// function Product(props) {
//     const {productName , price} = props;
//   return (
//     <div>
//       <div>
//         İsim:{productName} 
//         <br />
//         fiyat:{price}
//       </div>

//     </div>
//   )
// }
//component içinde component kullanalım.

import React from 'react'

function Product({productName,
  price,children}) {
    //const { productName, price } = props;  //destrukturur yapıyla props'a erişiyoruz.  //bu şekilde props'ı direk kullanabilirsinz.
  //   const productName = props.productName;  //bu şekilde de props'ı direk kullanabilirsiniz.,p
  return (
    <div>
      <div>
        <div>ÜRÜN BİLGİLERİ</div>
        isim : {productName}
        <br />
        fiyat: {price}
      </div>
      {children}
    </div>
  )
}

export default Product

