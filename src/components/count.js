import React , {Component} from 'react';

class Count extends Component{

    constructor(props){
        super(props)

        this.state = {
            counted : 0
        }
    }

    newState() {
        this.setState({      // This is called second
            counted : this.state.counted + 1},
            () => {
                console.log("call back method: ", this.state.counted)
            }
            )
        console.log(this.state.counted) // this is called first
    }
    render() {
        return(
            <div>
                   <div> Count = {this.state.counted} </div>
                   <button onClick = {() => this.newState()} > increment </button>
            </div>
        )
    }
}

export default Count;