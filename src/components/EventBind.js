import React, {Component} from 'react';

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state = {
            massage : "Hello",
            rio :"sead"
        }
    this.ClickButton = this.ClickButton.bind(this)    
    }

    ClickButton(){
            this.setState({
            massage : "Hi new one",
            roi : "erwr"
            })
    }


    render() {
        return(
            <div>
                <h1> {this.state.massage} </h1>
                {/* <button onClick={this.ClickButton.bind(this)}> Click </button> */}
                {/* <button onClick = {() => this.ClickButton()}> Click </button> */}
                <button onClick={this.ClickButton}> Click </button>
            </div>
        )
    }
}

export default EventBind;