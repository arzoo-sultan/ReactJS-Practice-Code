import React, { useState } from 'react'

const ChangeName = () => {
    const[name,setName]=useState("Guest")
     const handleLogin=()=>{
        setName(name==="Guest"?"Mr.Ali":"Guest")
     }
  return (
    <div>
         <h1>Hello :{name}</h1>
         <button onClick={handleLogin}>{name === "Guest" ? "Login" : "Logout"}</button>
         
    </div>
  )
}

export default ChangeName