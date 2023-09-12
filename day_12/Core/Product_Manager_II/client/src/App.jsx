import { useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import AllProducts from './components/AllProducts'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import ProductEdit from './components/ProductEdit'
import axios from 'axios'

function App() {

  const deleteElement = (id) =>{
    axios.delete('http://localhost:8000/api/products/'+id)
      .then(serverResponse => {
        console.log(serverResponse.data)
        setProducts(products.filter(product => product._id != id));
      })
      .catch(serverError => console.log(serverError))
  }

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <ProductForm />
            <hr />
            <AllProducts deleteElement={deleteElement} />
          </>
        } 
        />
        <Route path='/:id' element={<ProductDetails deleteElement={deleteElement}/>}/>
        <Route path='/:id/edit' element={<ProductEdit/>} />
      </Routes>

    </>
  )
}

export default App
