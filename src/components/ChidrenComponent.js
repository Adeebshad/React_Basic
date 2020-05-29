import React  from 'react';

function ChildrenComponent(props){
    return(
        <div>
            <button onClick = {props.greetHandler}> Grant Parent </button>
        </div>
    )
}

export default ChildrenComponent;
