import { useState } from 'react'
const Counter = () => {

  console.log('Counter rendered')

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
    // setCount(count + 1)  // This will not work as expected because React batches state updates and the `count` value is stale in this closure. To fix this, you can use the functional form of `setCount`:
    // setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)  // This will correctly increment the count by 2 because it uses the previous state value.
    // setCount(count + 1)
    // setCount(count + 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter;