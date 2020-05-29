import React, {Component} from 'react';

class Greetclass extends Component {
    constructor() {
        super()
            this.state = {
                massage : "Hi old massage"
            }

    }
    changeMassage(){
        this.setState({
            massage : "Clicked Massage"
        })
    }

    render(){
        return (
            <div>
            <h1> {this.state.massage} </h1>
            <button onClick={() => {this.changeMassage()} }>Subscribe</button>
            <p> {this.state.massage} </p>
            </div>
        )
    }
}

export default Greetclass;