import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { store } from './app/store.js'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,reset } from './features/CounterSlice.js'
import { changeTheme } from './features/ThemeToggler/ToggleSlice.js'
function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
    const theme = useSelector((state) => state.themeChanger.theme);
  return (
    <>
    <div style={{ backgroundColor: theme, minHeight: "100vh" }}>
       <button onClick={()=>dispatch(changeTheme())}>ThemeToggler</button>
     <h2>Counter :{count}</h2>
     <button onClick={()=>dispatch(increment())}>Increment</button>
     <button onClick={()=>dispatch(decrement())}>Decrement</button>
     <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
    </>
  )
}

export default App
