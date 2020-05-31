import React from 'react'

function NumberPower(){
    const values = [1,2,3]
            
    const pow2values = values.map(value =>  <h1> {value ** 2} </h1>)
    return(
        <div>
            {pow2values}
        </div>
    )
}

export default NumberPower;