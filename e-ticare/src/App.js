import './App.css';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
function App() {
  //container ve box clasının altına koyulan tüm kodlar böylelikle sağdan ve soldan boşluk bırakarak yazılır.
  return (
    <div>
      <div className='container'>
        <div className='box'>
          <Header/>
          <ProductList/>
        </div>
      </div>
    </div>
  );
}

export default App;
