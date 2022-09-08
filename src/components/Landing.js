import React from 'react';
import useTitle from '../hooks/useTitle';
const Landing = () => {

    //   useEffect(()=>{
    //     document.title ="Landing Page"
    // })

    useTitle("Landing page");


    return (
        <div>
            Landing
        </div>
    );
};

export default Landing;