import { createSlice } from '@reduxjs/toolkit'


const loadFromLocalStorage = () => {
    //eğer local storagede basket adında bir veri yazılmışsa diyoruz.
    if(localStorage.getItem('basket')){
        return JSON.parse(localStorage.getItem('basket'));
    }
    return [];//eğer yazılmamışsa sepette ürün yoktur ve bu da boş bir dizi demektir sepet boş anlamında.
}
const initialState =({
    products:loadFromLocalStorage(),
})

const writeLocalStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket));//basket adı altında sepete eklenen verileri local storageye ekleyecek.
}



const basketSlice= createSlice({
    name:'basket',
    initialState,
    reducers:{

    }
})

export const { } = basketSlice.actions

export default basketSlice.reducer