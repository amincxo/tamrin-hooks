import React , {useReducer , useEffect} from 'react';
import axios from 'axios'


const initialState = {
    isLoading: true,
    post:{},
    error:""
}

const reducer = (state , action) =>{
    switch (action.type) {
        case "SUCCESS":
            return {
                isLoading:false,
                post:action.post,
                error:""
            }
        case "FAILED":
            return {
                isLoading:false,
                post: {},
                error: "An error occured"
            }
    
        default:
            break;
    }
}

const NewGetData = () => {


    const [data,dispach] = useReducer(reducer , initialState);


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => dispach({type:"SUCCESS" , post:response.data}))
        .catch(error => {
            dispach({type:"FAILED"})
        })
    },[])

    return (
        <div>
            {data.isLoading ? "Loading . . ." : data.post.body}
            {data.error&&data.error}
        </div>
    );
};

export default NewGetData;