import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bai46 from './baitap/Bai46';
import ProductsList from './demo-useQuery/ProductsList';


const App = () => {
  return (
    <>
      <Routes>
          <Route path='/bai46' element={<Bai46/>}/>
          <Route path='/' element={<ProductsList/>}/>

      </Routes>
    </>
  )
}

export default App