import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Example1 = () => {
     const[isRunning,setRunning]=useState(false);
    const[counter,setCounter]=useState(0);
     useEffect(()=>{
        //without in dependency array it will only update
        //  when start stop btn clicked for every second 
        // update we should add it in dependency array
        // Now every time counter updates:
        // effect runs again
        // old interval cleared
        // new interval created
        // That means interval resets every second (not ideal) 
        // Split into two useEffects:
        
        let  intervalId=null;
        if(isRunning){
          intervalId = setInterval(()=>{
            setCounter(prev=>prev+1)
        },1000)
        }
      
        return ()=>{
            if(intervalId)
            clearInterval(intervalId);
        }
     },[isRunning]);
     useEffect(()=>{
         document.title=`Counter is Clicked  ${counter} times!`;
     },[counter])
     const toggleStartStop=()=>{
        setRunning(prev=>!prev);
     }
     const reset=()=>{
        setCounter(0);
        setRunning(false);
     }
  return (
    <div>
        <h1>{counter}</h1>
        <button 
        onClick={toggleStartStop}
        style={{ padding: '12px 24px', fontSize: '18px', margin: '10px' }} >
            {isRunning?"Stop":"Start"}</button>
         <button style={{ padding: '12px 24px', fontSize: '18px', margin: '10px' }}
          onClick={reset}>Reset</button>
    </div>
  )
}

export default Example1