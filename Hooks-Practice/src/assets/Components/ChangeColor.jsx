import React, { useState } from 'react'

export const ChangeColor = () => {
    const[color,setColor]=useState("red")
     const ToggleBtn=()=>{
        setColor(color==="red"?"blue":"red")
     }
  return (
    <div>
        <h1 style={{color:color}}>Change Color</h1>
         <button onClick={ToggleBtn}>Click</button>
    </div>
  )
}
