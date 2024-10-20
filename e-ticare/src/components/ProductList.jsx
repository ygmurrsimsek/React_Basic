import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllProduct } from '../redux/slices/ProductSlice';


function ProductList() {
    const dispatch=useDispatch();
    const {products}=useSelector((store)=>store.product);
    console.log(products);
    useEffect(()=>{//sayfa yüklendiğinde bu fonksiyonu ayağa kaldır diyor
        dispatch(getAllProduct());
    },[]);
  return (
    <div>
      
    </div>
  )
}

export default ProductList
