import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from '../page/Home.jsx';
function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
    </Routes>
    
  )
}

export default RouterConfig
