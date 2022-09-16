import React, {useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LocalStorage = () => {
    const [name , setName] = useLocalStorage("name","")
    return (
        <div>
            <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </div>
    );
};

export default LocalStorage;