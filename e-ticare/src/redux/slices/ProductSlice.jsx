import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product:[]//başlangıç değerleri. BAşta boş ürünler.
    ,
    selectProduct:{}//bu ürünün detayına gitmek istediğimizde orada tıklanan ürünlerin detayları için boş bir obje oluşturduk.
}

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    
    }
})

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions

export default counterSlice.reducer