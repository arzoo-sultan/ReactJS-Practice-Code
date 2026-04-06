import React, { useEffect, useRef } from 'react'

const Exampl1 = () => {
   
        const inputRef= useRef(0);
    useEffect(()=>{
        inputRef.current.focus();
    },[])
  return (
    <div>
        <input ref={inputRef}></input>
    </div>
  )
}

export default Exampl1