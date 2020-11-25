// http://localhost:3000/counter

import * as React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  return (
    <div>
      <span>
        <div>Current count: {count}</div>
      </span>
      <button onMouseDown={decrement}>Decrement</button>
      <button onMouseUp={increment}>Increment</button>
    </div>
  )
}

export default Counter
