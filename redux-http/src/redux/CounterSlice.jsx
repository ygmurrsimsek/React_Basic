import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //http isteği olmaz ise bu kullanılır olur ise.
  },
  extraReducers:()=> {
    //http isteği olur ise bu kullanılır.
  }
})

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions

export default counterSlice.reducer