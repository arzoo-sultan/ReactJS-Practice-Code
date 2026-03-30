
import './App.css'
import Navbar from "./components/Navbar"
// import Card from './components/Card'
import Product from './components/Product'
import {EventHandling} from './EventHandling+Rendering/EventHandling'
import {GreetExample} from './EventHandling+Rendering/GreetExample'
function App() {
  return (
    <>
      <Navbar/>
      {/* <Card name="Ali" age="21"/>
      <Card name="Faiq" age="87"/> */}
      {/* <Product name="Laptop" price={500000-789}/> */}
      <Product name="Mobile" price={890+100}/>
       <EventHandling/>
       <GreetExample/>

    </>
  )
}

export default App
