import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Example3 = () => {
    
    const[time,settime]=useState(new Date());
     const SetTimer=()=>{
        settime(new Date());
    }
    useEffect(()=>{
        let intervalId=setInterval(()=>{
            SetTimer();
        },1000)

     return ()=>{
        clearInterval(intervalId)
     }
    },[])
    
  return (
    <div>
        {/* //React can render:
       strings ✔️
        numbers ✔️
        JSX ✔️
     But not objects like new Date(). */}
       <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Example3