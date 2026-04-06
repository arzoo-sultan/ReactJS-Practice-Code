import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import UserContext from './components/UserContext'
import Component1 from './components/Component1'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
       <UserContext.Provider value={count}>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <Component1 />  
      </UserContext.Provider>
    </>
  )
}

export default App
