import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings' 
import { Navbar } from './Navbar/Navbar'
import Notfound from './Navbar/Notfound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>
            <Route path="*" element={<Notfound/>}></Route>
          </Routes>
          </BrowserRouter>
       
    </>
  )
}

export default App
