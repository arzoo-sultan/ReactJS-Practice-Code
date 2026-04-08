import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { store } from './app/store.js'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,reset } from './features/CounterSlice.js'
function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  return (
    <>
     
     <h2>Counter :{count}</h2>
     <button onClick={()=>dispatch(increment())}>Increment</button>
     <button onClick={()=>dispatch(decrement())}>Decrement</button>
     <button onClick={()=>dispatch(reset())}>Reset</button>
    
    </>
  )
}

export default App
