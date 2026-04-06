import React, { useEffect, useState } from 'react'

const Example5 = () => {
    const [users,setUsers]=useState([]);
     const[loading,setloading]=useState(true);
     useEffect(()=>{
        async function fetchUser(){
            try{
         const respone= await fetch('https://jsonplaceholder.typicode.com/users')
       const data= await respone.json();
          setUsers(data);
          setloading(false)
            }
         catch(err){
            console.log("Error Occurred while fetching data");
            setloading(false);
         }
        }
        fetchUser();
     },[])

     if(loading){
        return(
            <h1>Loading.....</h1>
        )
     }
  return (
    <div>Example5

        <ul>
            {
                users.map(user=>
                    <li key={user.id}>
                     Username:{user.name} 
                    Userid: {user.id} 
                    User Email {user.email}</li>
                )
            }
        </ul>
    </div>
    
  )
}

export default Example5