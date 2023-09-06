import { useState } from 'react'
import './App.css'
import {Routes, Route, Link } from "react-router-dom";
import SWForm from './components/SWForm';
import SWDisplay from './components/SWDisplay';
import SWPlanetsDisplay from './components/SWPlanetsDisplay';
import Error from './components/Error';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <SWForm/>
      <Routes>
        <Route path='/people/:id' element={<SWDisplay/>}/>
        <Route path='/planets/:id' element={<SWPlanetsDisplay/>}/>
        <Route path='/error' element={<Error/>}/>

      </Routes>
    </>
  )
}

export default App
