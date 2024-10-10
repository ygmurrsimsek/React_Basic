import './App.css';
import Product from './Product';
import Component from './Component';
function App() {

  // let isimler=[
  //   'Ayse',
  //   'yagmur',
  //   'dogukan'
  // ]
  
  return (
    //2
    <div>
      <Product productName="Ayakkabi" price={3500}/>
      <hr />
      <Product productName="Pantolon" price={4500}/>
      <hr />
      <Product productName="Ayakkabi" price={3500}/>
      <hr />
      <Product productName="Ayakkabi" price={3500}>
        <Component/>
      </Product>
    </div>


  );

  //1
    // <div>
    //   {
    //   isimler.map((isim,index) => {
    //     return(
    //       <div style={{
    //         border:'1px solid black', backgroundColor:'orange'
    //         }} 
    //         key={index}>{isim}</div>
    //     )})
    //   }
    // </div>



  // );
}

export default App;
