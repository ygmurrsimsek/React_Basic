import { configureStore } from '@reduxjs/toolkit'
import AppSLice from '../redux/slices/AppSlice';
import ProductSlice from '../redux/slices/ProductSlice';
import BasketSlice from '../redux/slices/BasketSlice';
export const store = configureStore({
  reducer: {
    app:AppSLice,
    product:ProductSlice,
    basket:BasketSlice
  },
})