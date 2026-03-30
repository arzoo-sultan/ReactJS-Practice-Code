import React from 'react'
import './EventHandling.css'
export const EventHandling = () => {
    function handleClick(){
        alert("Button was Clicked!")
    }
  return (
    <div>
        <button onClick={handleClick}> Click Me</button>
    </div>
  )
}
