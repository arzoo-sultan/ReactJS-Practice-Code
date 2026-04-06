import React, { useRef, useState } from 'react'

const Example2 = () => {
    const refcounter=useRef(0);
    const [render,setrender]=useState(0);
    console.log(refcounter.current);
    const IncreaseCounter=()=>{
       refcounter.current++;
    }
  return (
    <div>Example2
         <h1>Counter :{refcounter.current}</h1>
        <button onClick={IncreaseCounter}>Increase</button>
        <button onClick={()=>setrender(render+1)}>Re-Render</button>
    </div>
  )
}

export default Example2