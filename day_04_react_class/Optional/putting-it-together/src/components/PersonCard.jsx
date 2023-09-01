import React, { Component } from 'react'

class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = this.props.person
  }
  increaseAg = () => {
    this.setState({age:this.state.age+1},()=>console.log(this.state,"⏰⏰"));
  }
  render() {
    const {firstName, lastName, age, hair_color } = this.props.person;
    console.log(this);
    return (
      <fieldset>
        <legend>---personCard---</legend>
         <h1>{lastName}, {firstName}</h1>
         <p>Age: {this.state.age}</p>
         <p>Hair Color: {hair_color}</p>
         <button onClick={this.increaseAg}>Birthday Button for {firstName} {lastName}</button>
      </fieldset>
    )
  }
}

export default PersonCard