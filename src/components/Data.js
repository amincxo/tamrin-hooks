import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Data = () => {
    const [data , setData] = useState([]);
    
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(response.data))        
    },[])
    return (
        <div>
            {
                data.length ?
                data.map(item => <h3 key={item.id} >{item.title}</h3>):
                <h1>Lodding . . .</h1>
            }
        </div>
    );
};

export default Data;