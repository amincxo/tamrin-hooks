import React, {useState} from 'react';
import Landing from './Landing';
import Login from "./Login"

const CustomHook = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            <button onClick={() => { setToggle(!toggle) }}> Toggle </button>
            {toggle ? <Landing /> : <Login />}
        </div>
    );
};

export default CustomHook;