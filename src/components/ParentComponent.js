import React, {Component} from 'react';
import ChildrenComponent from './ChidrenComponent';

class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            parentName : "Parent"
        }
        this.greetparent = this.greetparent.bind(this)
    }

    greetparent() {
        alert(`Hello ${this.state.parentName}`)
    }

    render() {
        return(
            <div>
                <ChildrenComponent greetHandler = {this.greetparent}/>
            </div>
        )
    }
}

export default ParentComponent; 