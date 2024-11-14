import React,{useEffect,useState} from 'react'

import '../componentcss/ProductDetails.css'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/slices/ProductSlice';
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

function ProductDetails() {
    const {id}=useParams();

    const {products,selectedProduct}=useSelector((store)=>store.product);

    const {image,description,price,title}=selectedProduct;

    const [count,setCount]=useState(0);

    const dispatch=useDispatch();
   
    useEffect(()=>{
        getProductById();
    },[]);
    const getProductById=()=>{

        products && products.map ((product)=>{

            if(product.id === Number(id)){//şimdi burada butona basılan ürünü slice içindeki nesneye koymamız gerek bunun için sliceye gideriz.
                return dispatch(setSelectedProduct(product));
            }
        })
    }
    const arttir=()=>{
        return setCount(count+1);
    }
    const azalt=()=>{
        if(count>0){
            return setCount(count-1);
        }
    }
    
  return (
    <div style={{marginTop:'30px', display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div>
            <img className='image-details' src={image}></img>
        </div>
        <div>
            <h2 className='title'>{title}</h2>
            <p className='description' >{description}</p>
            <h3 className='price' >{price}₺</h3>
            <div style={{display:'flex',alignItems:'center'}}>
                <IoIosAddCircleOutline className='icon-left' onClick={arttir}/>
                <span style ={{fontSize:'35px',fontFamily:'Times New Roman '}}>{count}</span> 
                <CiCircleMinus  onClick={azalt} className='icon-right'  />
            </div>
            <div>
                <button className='button'>Sepete Ekle</button>
            </div>
        </div>

    </div>
  )
}

export default ProductDetails
