import React from 'react'


const Greet = (props) => {
    console.log(props)
    return (
    <div>
    <h1> Hi {props.name} roll {props.roll} </h1>
    {props.children}
    </div>
    )
}

export default Greet;
