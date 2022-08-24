import React , {useEffect , useState} from 'react';
import axios from 'axios';

const Getdata = () => {

    const [isLoding , setIsLoding]= useState(true);
    const [post , setPost]= useState({});
    const [error , setError]= useState();


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            setIsLoding(false);
            setPost(response.data);
            setError("")
        })
        .catch(error=>{
            setIsLoding(false);
            setPost({});
            setError("An error occured")
        })
    },[])



    return (
        <div>
            {isLoding ? <h3>Loding . . .</h3> : post.body}
            {error && error}
        </div>
    );
};

export default Getdata;