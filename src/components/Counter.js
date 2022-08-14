import React , {useState} from 'react'

const Counter = () => {

    const [number , setNumber] = useState(0);
    const [name , setName] = useState('amin');


    const nameHandler = () => {
        if (name === "amin" ) {
            setName("ali")
        } else {
            setName("amin")
        }
    }
    const clickHandler = () => {
        setNumber(prevNumber => prevNumber + 1 )
    }

  return (
    <div>
        <h1> {name} </h1>
        <button onClick={nameHandler} > esmo avaz kon </button>
        <h1> {number} </h1>
        <button onClick={clickHandler} > Ziyad kon </button>
        {/* inline function on button */}
        {/* <button onClick={()=>setNumber(number +1)} > Ziyad kon </button> */}
    </div>
  )
}
export default Counter