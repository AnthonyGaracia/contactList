import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
    const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
    const data = await response.json()
    
    setPosts(data)

    }
    fetchPosts()
}, [])

return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {
          users.map((user) => {
            return <li key={user.name}></li>

          })
        }
      </ul>
    </div>
  )
  
  
}

export default App
