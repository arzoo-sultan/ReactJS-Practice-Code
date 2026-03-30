import React from 'react'
export const GreetExample = () => {
    function helloWorld(name){
        console.log(name)
           
    }
  return (
    <div>
       <button onClick={()=>helloWorld("Ali")}>
        Greet
       </button>
    </div>
  )
}
