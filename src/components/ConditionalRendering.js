import React, {Component} from 'react'

class ConditionalRendering extends Component{
    constructor(props){
        super(props)
        this.state = {
            isloggedin : false
        }
    }
    
    render(){

        return this.state.isloggedin ? (<div>'Hi adeeb'</div>) : (<div>'Hi guest'</div>)
        // let massage
        // if (this.state.isloggedin){
        //     massage = 'Hi guest'
        // }
        // else
        // {
        //     massage = 'Hi adeeb'
        // }

        // return <div> <h1>{massage}</h1> </div>

    }



}

export default ConditionalRendering;