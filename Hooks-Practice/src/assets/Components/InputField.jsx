import React, { useState } from 'react'

const InputField = () => {
    const[value,setValue]=useState("")
  return (
    <div> <h1>{value}</h1>
    {/* //Remove spaces only from start & end (most common)Use trim() */}
    <div><h2>Characters :{value.trim().length}</h2></div>
     <input placeholder='Enter Text Here' value={value} type='text' onChange={(e)=>{setValue(e.target.value)}}></input>
        </div>
  )
}

export default InputField