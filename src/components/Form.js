import React , {useState} from 'react';

const Form = () => {
    const [data , setData] = useState({name: '' , age: '',});
    return (
        <div>
            <input type="text" value={data.name} onChange={(event)=>setData( {...data ,name :event.target.value})} />
            <input type="text" value={data.age} onChange={(event)=>setData( {...data ,age :event.target.value})} />
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Form;