import React from 'react'
import '../App.css';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllProduct } from '../redux/slices/ProductSlice';
import Product from './Product';


function ProductList() {
    const dispatch=useDispatch();
    const {products}=useSelector((store)=>store.product);
    useEffect(()=>{//sayfa yüklendiğinde bu fonksiyonu ayağa kaldır diyor
        dispatch(getAllProduct());
    },[]);
  return (
    <div className='flex-row' style={{flexWrap:'wrap' , marginTop:'25px'}}>
      {/*burada flex-row ile birlikte maplenen prouctları yan yana dizdirmiş olduk. */}
      {
        products && products.map((product) =>(
          <Product key ={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default ProductList
