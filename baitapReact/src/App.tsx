import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bai1 from './baitap/Bai1';


const App = () => {
  return (
    <>
      <Routes>
          <Route path='/bai1' element={<Bai1/>}/>
      </Routes>
    </>
  )
}

export default App