import React from 'react';

const ComponentA = (props) => {

    console.log("component A rendered")

    return (
        <div>
            component A: {props.value}
            <button onClick={props.changeHandler} > change A </button>
        </div>
    );
};

export default React.memo(ComponentA);