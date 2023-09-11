import { useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import AllProducts from './components/AllProducts'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <ProductForm />
            <hr />
            <AllProducts />
          </>
        } 
        />
        <Route path='/:id' element={<ProductDetails/>}/>
      </Routes>

    </>
  )
}

export default App
