import React ,{useState} from "react"
import Logger from "./components/Logger";

const App = () => {
    
    const [isShown , setIsShown] = useState(true)

    return (
        <div>
            <button onClick={()=>{setIsShown(false)}} >Delete</button>
            <button onClick={()=>{setIsShown(true)}} >Show</button>
            {isShown && <Logger />}
        </div>
    );
};

export default App;
