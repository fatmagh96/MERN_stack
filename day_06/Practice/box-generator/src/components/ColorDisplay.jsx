import React from 'react'
import './ColorDisplay.css'

const ColorDisplay = (props) => {
  return (
    <fieldset>
        <legend>ColorDisplay</legend>
        <div className="box-container">

        {/* <div className="box" style={{backgroundColor:"red"}}></div> */}
        {props.boxes.map((box,idx)=> <div className="box" key={idx} style={{backgroundColor:box['background_color'],height:box['length']+'px',width:box['length']+'px'}}></div> )}


        </div>


    </fieldset>
  )
}

export default ColorDisplay