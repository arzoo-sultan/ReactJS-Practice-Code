import React from 'react'
import './Card.css'

const Card = ({name, age}) => {
  return (
    <div className='Card'>
      <h1>Component Example</h1>
      <h2>Hello from Card</h2>
      <p>This is {name}'s Card</p>
      <p>He is {age} years Old</p>
    </div>
  )
}

export default Card;