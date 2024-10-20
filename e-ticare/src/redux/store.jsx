import { configureStore } from '@reduxjs/toolkit'
import AppSLice from '../redux/slices/AppSlice';
import ProductSlice from '../redux/slices/ProductSlice';
export const store = configureStore({
  reducer: {
    app:AppSLice,
    product:
  },
})