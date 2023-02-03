
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
//we can only store "string/json" data into localStorage !

//localStorage
//write/storage data into localStorage
//localStorage.setItem(key, value)
//e.g localStorage.setItem("name","Naqvi")

//read data from localStorage
//localStorage.getItem(key)
//e.g localStorage.getItem("name")

//remove or delete items from localStorage
//localStorage.removeItem(key)
//e.g localStorage.removeItem("name")

//clear all localStorage
//localStorage.clear()
//e.g localStorage.clear()



/*  let user = {
  name:"John",
  age:23
} */
/*
console.log(user+2) */
/* console.log(user.toString()) */


/* let numbers = [1,2,3]
console.log(numbers.toString()) */

/* let json = JSON.stringify(user)
console.log(json)
let originalObject= JSON.parse(json)
console.log(originalObject) */

function App() {

  const [users,setUsers]=useState([])

  useEffect(()=>{
    if(localStorage.getItem("users")){
      let originalData = JSON.parse(localStorage.getItem("users"))
      setUsers(originalData)

    }else{
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
      console.log("fetching data ....")
        setUsers(response.data)
      localStorage.setItem("users",JSON.stringify(response.data))

    })
    }
  
  },[])

  return (
    <div className="App">
      <h1>My Vercel Deployed App</h1>
      <ul>
        {users.map(user=>{
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;