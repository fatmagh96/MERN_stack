import React, {useState} from 'react'


const ColorForm = (props) => {
  const [box, setBoxColor] = useState({"background_color":"","length":""})
  const handleColor = (e) => {
    setBoxColor({...box,'background_color':e.target.value})
  }
  const handleLength = (e) => {
    setBoxColor({...box,'length':e.target.value})
  }
  const handleForm = (e) => {
    e.preventDefault();
    props.AddtoBoxes(box)
    console.log(box);
    setBoxColor({"background_color":"","length":""})
  }
  return (
    <fieldset>
        <legend>Color Form</legend>
        <form onSubmit={handleForm}>
            <label>Color:</label>
            <input type="text" onChange={handleColor} value={box.background_color}/>
            <label htmlFor="">Length of sides:</label>
            <input type="number" onChange={handleLength} value={box.length} />
            <button>Add</button>
        </form>
    </fieldset>
  )
}

export default ColorForm