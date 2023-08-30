import React from "react";

class FirstClassComponenet extends React.Component {
    render() {
        console.log(this);
        return (
            <fieldset>
                <legend>--- FirstClassComponenet ---</legend>
            <div>
                <h1>Hello from 1st class Component</h1>
                <h1>Number: {this.props.number}</h1>
            </div>

            </fieldset>

        )
        
    }
}

export default FirstClassComponenet;