import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Learnig from './components/User/Learnig'
import UserList from './components/User/UserList'
function App() {
  const [users,setUsers] = useState([])
  const createUser = (user) =>{
    setUsers((prevState)=>{
      return [...prevState,user]
    })
 
  }

  return (
    <div className="App">
      <Learnig getUser={createUser}/>
      <UserList usersList={users}/>
     </div>
  )
}

export default App
