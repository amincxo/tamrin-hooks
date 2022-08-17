import React ,{useState , createContext}  from "react"
import ComponentA from "./components/ComponentA";

export const NameContext = createContext()

const App = () => {
    
    const [name, setname] = useState('aminam');

    return (
        <div>
             <NameContext.Provider value={name} >
                <ComponentA />
             </NameContext.Provider>
        </div>
    );
};

export default App;
