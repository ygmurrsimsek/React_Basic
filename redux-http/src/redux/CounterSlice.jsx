import { createSlice } from '@reduxjs/toolkit'
//buraya stateler gelir.useSelector ile statelere erişiriz.
const initialState = {
  value: 55,//bu bir state ve aşağıya state olarak gider fonksiyonda kullanılacaksa
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  //buraya fonksiyonlar gelir ve useDispatch ile çağırılır.birden fazla fonksiyon oluşturabiliriz.
  reducers: {
    increment:(state)=>
    {
      //yukarıda bulunan 55 değeri state olarak geldi.
      state.value=state.value+1;
    },
    description:(state)=>
    {
      state.value=state.value-1;
    }
  }
})

// Action creators are generated for each case reducer function
export const {increment,description} = counterSlice.actions

export default counterSlice.reducer