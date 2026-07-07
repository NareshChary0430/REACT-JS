

import {useState} from 'react'

const App = () => {


  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    "name" : "sai",
  })

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleChangeName = () => {

    // setUser(user.name = "John") this will not cause a re-render because we are mutating the existing user object and not creating a new reference for the user object
    // setUser({name: "John"}) these will create a new reference for the user object and will cause a re-render
  }

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Count: {count}</p>
      <p>Name: {user.name}</p>

      <button onClick={handleClick}>Increment Count</button>
      <button onClick={handleChangeName}>Change Name</button>
    
    </div>
  )
}

export default App


// on setFunction wil rer-render the component because it will create a new reference for the state object and will cause a re-render.

// it will store in lexical environment and will be used in the next render cycle.