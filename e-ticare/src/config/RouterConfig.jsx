import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from '../page/Home.jsx';
import ProductDetails from '../components/ProductDetails.jsx';
function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product-details/:id' element={<ProductDetails/>} />

    </Routes>
    
  )
}

export default RouterConfig
