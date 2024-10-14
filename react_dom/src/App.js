import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './page/Home.jsx';
import About from './page/About.jsx';
import Contact from './page/Contact.jsx';
import Product from './page/Product.jsx';
import Header from './Component/Header.jsx';
import NotFoundPAge from './page/NotFoundPage.jsx';
import Employee from './page/Employee.jsx';
import Company from './page/Company.jsx';
function App() {

  //ilk olarak routes ve route urlye bu uzantı geldiğinde bu componente git demek istiyor daha sonra o componente gidince de orada yazılan kodları ekranda gösterir.
  return (
    <div>
      <Header />  {/* Header Component  
      header componentinde anasayfa gibi şeyler olsun istpyurz ve onlardan da başka sayfaya yönlendirme istiyoruz bunu da link bileşeni ile yaparız router-dom kütüphanesine bağlıdır link . to ile urlye eklenmiş olur o içerik anasyfaya tıklayınca to içindeki urlnin sonuna yazlır sonra route de onu kontrol ediyor ve o componente gidiyor.*/}
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/About' element={<About />} >
        <Route path='employee' element={<Employee/>}></Route>
        <Route path='company' element={<Company/>}></Route>
      </Route>

      <Route path='/Product' element={<Product />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/*' element={<NotFoundPAge />} />
    </Routes>
    </div>
  );
}

export default App;
