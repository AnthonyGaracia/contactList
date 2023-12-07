//in curly braces it is a named import
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const[hash, setHash] = useState(window.location.hash.slice(1)*1)
  //window.location.hash gets value of hash

//useEffect takes two parameters. The first is a call back funtion, the second an empty array.
//useEffect talks to the server
useEffect(() => {
  //fetch is a two step process.1st async  
  const fetchUsers = async () => {
    const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
    //2nd json
    const data = await response.json()
    
    setUsers(data)

    }
    fetchUsers()
}, [])
//any time hash changes this changes the state and react re-renders app
useEffect(() => {
  window.addEventListener("hashchange", () => {
    setHash(window.location.hash.slice(1)*1)
  })
},[])

const user = users.find((user) => {
  return hash === user.id
})

return (
    <div>
     <h1>Contact List ({users.length})</h1> 
      <h4>{user ? user.email : null}</h4>
      <h4>{user ? user.phone : null}</h4> 
    
     
       <ul>
        {
          users.map((user) => {
            //could only get username to appear with user.id, a path maybe?
            return (
            <li key={user.id}> 
            <a href={`#${user.id}`}>
            {user.username}
            </a>
             </li>
            )
          })
        }
      </ul>
    </div>
  )
 //to write java script in jsx always use {} 
 //set parameter inside of map
 //users.length in {} displays length of array
 //anchor tag to make a link
 //turnary fixes refresh issue
 //couldnt figure out how to get email
  
}

export default App
