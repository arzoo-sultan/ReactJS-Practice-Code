import React, { useState } from 'react'
import './Toggletext.css'
export const ToggleText = () => {
    const[isVisible,setIsVisible]=useState(true);
      const toggle=()=>{
        setIsVisible(!isVisible);
      }
  return (
    <>

    <button onClick={toggle}>{isVisible? "Hide Text": "Show Text"}</button>
    {/* This is a very popular React trick called Short-circuit evaluation. */}
    {/* {isVisible && <h2>Hello! This text is toggled.</h2>} */}
    <h2>
      {isVisible?
      "Welcome to my website!"
       : "Thank you for visiting!"}
    </h2>
    
    </>
    
  )
}
