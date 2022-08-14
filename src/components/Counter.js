import React , {useState} from 'react'

const Counter = () => {

    const [number , setNumber] = useState(0);
    const clickHandler = () => {
        setNumber(number+1)
    }

  return (
    <div>
        <h1> {number} </h1>
        <button onClick={clickHandler} > Ziyad kon </button>
        {/* inline function on button */}
        {/* <button onClick={()=>setNumber(number +1)} > Ziyad kon </button> */}
    </div>
  )
}
export default Counter