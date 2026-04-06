import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
export const ThemeToggle = () => {
   const {theme,settheme}=useContext(ThemeContext);
   const toggle=()=>{
      const newtheme=theme==="white"?"black":"white"
      settheme(newtheme)
         document.body.style.backgroundColor=newtheme
    }
  return (
    <>
    <div><button onClick={()=> toggle()}>Toggle Theme</button></div>
    </>
  )
}
