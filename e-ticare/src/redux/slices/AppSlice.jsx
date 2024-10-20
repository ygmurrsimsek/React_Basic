import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false
    
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    
    }
})

// Action creators are generated for each case reducer function
export const { } = AppSlice.actions

export default AppSlice.reducer