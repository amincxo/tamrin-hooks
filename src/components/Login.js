import React from 'react';
import useTitle from '../hooks/useTitle';
const Login = () => {

    // useEffect(()=>{
    //     document.title ="Login Page"
    // },[])

    useTitle("Login page");

    return (
        <div>
            Login
        </div>
    );
};

export default Login;