import React from 'react'
import { useState } from 'react'
export const Counter = () => {
    const[counter,setCounter]=useState(0);
  return (
    <div>
        <h1>Counter :{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increase</button>
        <button onClick={()=>setCounter(counter-1)}>Decrease</button>
            </div>
  )
}
