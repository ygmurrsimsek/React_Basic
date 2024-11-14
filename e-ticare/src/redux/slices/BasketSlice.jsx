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



export const basketSlice= createSlice({
    name:'basket',
    initialState,
    reducers:{
        //burada sepete ürün ekleyeceğiz bu yüzden bizim bir state birde actiona ihtiyaç var .
        addToBasket :(state,action)=>{
            //ilk olarak sepette olan ürünlerle eklenen ürünlerin uyuşup uyuşmadığına bakarız yani action ile gelen ürünle statede olan productımda olan ürünlerin idlerini karşılaştırarak olan ürünün üstüne eklenip eklenmediği halini oluşturucaz.
            const findProduct= state.products && state.products.find((product)=> product.id=== action.payload.id);

        }
    }
})

export const { } = basketSlice.actions

export default basketSlice.reducer