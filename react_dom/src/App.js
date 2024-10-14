import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './page/Home.jsx';
import About from './page/About.jsx';
import Contact from './page/Contact.jsx';
import Product from './page/Product.jsx';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Product' element={<Product />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
