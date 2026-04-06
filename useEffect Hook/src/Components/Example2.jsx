import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Example2 = () => {
    const [color,setColor]=useState("white");
    const randomColor=()=>{
       setColor("#"+Math.floor(Math.random()*16777215).toString(16))
            
    }
    useEffect(()=>{
        let intervalId=null;
      intervalId=setInterval(()=>{
      randomColor();
       },1000)
        return ()=>{
              clearInterval(intervalId);
        }
          
    
    },[]);
    useEffect(()=>{
        //<div style={{backgroundColor: color, height: "100vh"}}>
          document.body.style.backgroundColor=color;
    },[color])
  return (
    <div>
        <h1>Automatic Background color Changer</h1>
    </div>
  )
}
