import React, { useEffect, useState } from 'react'

const Example4 = () => {
    const[height,setheight]=useState(window.innerHeight);
    const[width,setWidth]=useState(window.innerWidth);
    const handleresize=()=>{
        setheight(window.innerHeight);
         setWidth(window.innerWidth);
    }
    useEffect(()=>{   
        //addEventListener does NOT return an ID like setInterval does.
    // Using clearInterval here does nothing.

    // ✅ Correct way is to remove the listener with removeEventListener.
      window.addEventListener("resize",handleresize)
      return()=>{
              window.removeEventListener("resize",handleresize);

      }
    },[])
  return (
    <div>
    <h1>Height :{height}</h1>
    <h1>Width :{width}</h1>
    </div>
  )
}

export default Example4