import { configureStore } from '@reduxjs/toolkit'
import useReducer from '../redux/userSlice.jsx';//bununla birlikte sliceyi bağlamak için öağırıyoruz.
//ben bu userReduceri userlist componentinde kulanmak istiyorum diyelim.
export const store = configureStore({
  reducer: {
    users: useReducer //bununla birlikte sliceyi storeye bağlamış olduk.
  },
})