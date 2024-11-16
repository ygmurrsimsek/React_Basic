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
    drawer:false ,//bu sepete tıklanınca açılmasını sağlayacak drawerin
    totalAmount:0
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
            //burada sepette bulunan ürünle yeni eklenen ürünü aynı mı diye kontrol ediyoruz eğer aynıysa sepettekinin miktarını arttıracağız değilse farklı bir ürün olarak sepete ekleyeceğiz.
            if(findProduct){
//yani sepette aynı üründen varsa
                findProduct.count+=action.payload.count;
                const extraProducts=state.products.filter((product) => product.id !== action.payload.id);
                state.products=[...extraProducts,findProduct];
                writeLocalStorage(state.products);
            }
            else{
                state.products=[...state.products,action.payload];
                writeLocalStorage(state.products);
            }

        }
        ,
        degisimDrawer:(state)=>{
            state.drawer=!state.drawer; //drawer'ın açık olup kapalı olmasını sağlayan reducer.
        }
        ,
        CalculateTotalAmount:(state)=>{
            state.totalAmount=0;
            state.products && state.products.map((product)=>{
                state.totalAmount+=product.price;
            })
        }

    }
})

export const { addToBasket,degisimDrawer,CalculateTotalAmount} = basketSlice.actions

export default basketSlice.reducer