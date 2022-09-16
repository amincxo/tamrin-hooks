import {useState , useEffect} from 'react';

const useLocalStorage = (key, initialValue) => {
    console.log(key);
    const [value, setValue] = useState(() => {
        const localState = window.localStorage.getItem(key);
        return localState ? JSON.parse(localState) : initialValue ;
    })


    useEffect(() => {
        window.localStorage.setItem(key , JSON.stringify(value))
    },[value])

    return [value , setValue]

};

export default useLocalStorage;