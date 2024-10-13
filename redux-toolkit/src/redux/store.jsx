import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/CounterSlice.jsx';
//configureStore adlı bir fonksiyon varmış reduxtoolkitte bunu çağırdık ve fonksiyonu yazdık. internet sitesinde de var.Export ile dışarıya erişilebilir yapıldı.
export const store = configureStore({
  reducer: {
    counter :counterReducer,
  },
})