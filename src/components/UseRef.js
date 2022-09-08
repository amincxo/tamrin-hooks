import React, { useRef , useEffect } from 'react';

const UseRef = () => {
    const input = useRef(null)

    useEffect(() => {
        console.log(input.current.type)
        input.current.focus()
    }, []);


    return (
        <div>
            <input ref={input} type="text" />
        </div>
    );
};

export default UseRef;