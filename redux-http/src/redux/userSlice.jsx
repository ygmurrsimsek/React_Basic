import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  users:[],
  loading: false
}//bu statemizin ilk halidir.biz bu çekilen verilerle bu usersi doldurmamız gerek.

//BU SİTENİN ÖRNEĞİ
// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId: number, thunkAPI) => {
//       const response = await userAPI.fetchById(userId)
//       return response.data
//     },
//   )

export const AllUsers=createAsyncThunk('users',async() => 
    {
        const response= await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
    //bu veriyi çeken kodu dışarıya açmak için;
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //http isteği olmaz ise bu kullanılır olur ise.
  },
  extraReducers:(builder)=> {
    //http isteği olur ise bu kullanılır.
    builder.addCase(AllUsers.fulfilled,(state,action)=>{
      state.users=action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const {} = userSlice.actions//buraya sadece reducers içine açmış olunan fonksiyonlar yazılır.

export default userSlice.reducer

//şimdi bu sliceyi storeye bağlamamız gerekiyor onun için store componentine gidiyoruz.