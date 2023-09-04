import { useState } from 'react'
import ColorDisplay from './components/ColorDisplay'
import ColorForm from './components/ColorForm'
import './App.css'

function App() {
  const [boxes, setBox] = useState([])
  // const boxes = []
  const AddtoBoxes = (box) => {
    // boxes.push(box);
    console.log(box);
    setBox([...boxes,box])
  }
  console.log(boxes);
  return (
    <>
      <ColorForm AddtoBoxes={AddtoBoxes}/>
      {/* {boxes.map((box,idx)=><ColorDisplay box = {box} idx={idx}/>)} */}
      <ColorDisplay boxes={boxes}/>
    </>
  )
}

export default App
