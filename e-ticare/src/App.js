import './App.css';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import RouterConfig from './config/RouterConfig.jsx';
import Loading from './components/Loading.jsx';
function App() {
  //container ve box clasının altına koyulan tüm kodlar böylelikle sağdan ve soldan boşluk bırakarak yazılır.
  return (
    <div>
      <div className='container'>
        <div className='box'>
          <Header/>
          <Loading/>
          <RouterConfig/>
        </div>
      </div>
    </div>
  );
}

export default App;
