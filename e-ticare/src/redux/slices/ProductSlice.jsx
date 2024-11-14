import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products:[]//başlangıç değerleri. BAşta boş ürünler.
    ,
    selectedProduct:{}//bu ürünün detayına gitmek istediğimizde orada tıklanan ürünlerin detayları için boş bir obje oluşturduk.buna o ürünleri setlemek için reducersleri kullanırız
    ,
    loading:false
}

const BASE_URL = 'https://fakestoreapi.com';
export const getAllProduct=createAsyncThunk("getAllProduct",async()=>{
  const response= await axios.get(`${BASE_URL}/products`);
  return response.data;
})
export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct :(state,action)=>{
      state.selectedProduct=action.payload;
    }
  },
  extraReducers: (builder) => {
      builder.addCase(getAllProduct.pending,(state)=>{
        state.loading=true;
      })
      builder.addCase(getAllProduct.fulfilled,(state,action)=>{ 
        state.loading=false;
        state.products=action.payload;
      });
  }
});

// Action creators are generated for each case reducer function
export const {setSelectedProduct } = counterSlice.actions

export default counterSlice.reducer