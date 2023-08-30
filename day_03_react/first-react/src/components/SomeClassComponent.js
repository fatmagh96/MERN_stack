import React, {Component} from "react"; //{} destructuring

class SomeClassComponent extends Component {
    render(){
        return(
            <fieldset>
                <legend>***SomeClassComponent***</legend>
                {this.props.animals.map((animal,index) => <h4 key = {index}>{animal} 😎</h4> )}
            </fieldset>
        )
    }
}
export default SomeClassComponent;