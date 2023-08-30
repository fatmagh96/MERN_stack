import React, { Component } from 'react'

class PersonCard extends Component {
  render() {
    const {firstName, lastName, age, hair_color } = this.props.person;
    console.log(this);
    return (
      <div>
        {/* <legend>---personCard---</legend> */}
         <h1>{lastName}, {firstName}</h1>
         <p>Age: {age}</p>
         <p>Hair Color: {hair_color}</p>
      </div>
    )
  }
}

export default PersonCard