import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './components/Home'
import NumOrWord from './components/NumOrWord'

function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:param" element={<NumOrWord />} />
        <Route path="/:param/:text" element={<NumOrWord />} />
        <Route path="/:param/:text/:bg" element={<NumOrWord />} />
      </Routes>
    </>
  )
}

export default App
