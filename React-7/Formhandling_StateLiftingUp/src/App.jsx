import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import UserCard from './components/UserCard'
import { useState } from 'react'

const App = () => {

   const [users, setUsers] = useState([]);
   console.log(users)


  const [toggle, setToggle] = useState(false)

  return (
    <div>

        <Register setToggle={setToggle}  setUsers={setUsers} />

        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}



    </div>
  )
}


export default App
