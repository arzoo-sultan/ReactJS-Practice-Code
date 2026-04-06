import React,{useContext} from 'react'
import UserContext from './UserContext'
const Component1 = () => {
  const count = useContext(UserContext);

  return (
    <div>Component1: {count}</div>
  )
}

export default Component1