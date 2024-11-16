import './App.css';
import Header from './components/Header.jsx';
import RouterConfig from './config/RouterConfig.jsx';
import Loading from './components/Loading.jsx';
import { useSelector,useDispatch } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import { CalculateTotalAmount, degisimDrawer } from './redux/slices/BasketSlice.jsx';
import { useEffect } from 'react';
function App() {
  //container ve box clasının altına koyulan tüm kodlar böylelikle sağdan ve soldan boşluk bırakarak yazılır.

const {products,drawer,totalAmount}=useSelector((store)=>store.basket);
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(CalculateTotalAmount());
},[])
return (
  <div>
    <div className='container'>
      <div className='box'>
        <Header/>
        <Loading/>
        <RouterConfig/>
        <Drawer open={drawer} onClose={()=> dispatch(degisimDrawer())} anchor='right'>
        {//draweri kapatmak için degisimDrawerden faydalanarak drawerin tersini göndermiş olduk.
          products && products.map((product) => {
          // Her ürün için JSX döndürülüyor
            return (
              <div className='flex-row' style={{padding:'20px'}}>
                <img src={product.image} width={50} height={50} style={{marginRight:'10px'}} alt="Product"></img>
                <p style={{width:'320px', marginRight:'5px'}}>{product.title} ({product.count})</p>
                <p style={{marginRight:'10px',fontWeight:'bold',width:'70px'}}>{product.price}TL</p>
                <button style={{padding:'5px 10px',border:'none',borderRadius:'5px',color:'white',backgroundColor:'rgb(185,76,76',width:'50px'}}>Sil</button>
              </div>
            );
          })
        }
        <div>Toplam Tutar :{totalAmount}</div>
        </Drawer>
      </div>
    </div>
  </div>
);
}

export default App;
