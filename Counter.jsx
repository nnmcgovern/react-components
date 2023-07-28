import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    if (count < 30) {
      setCount(count + 1)
    }
  }

  const plusTen = () => {
    if (count < 30) {
      if (count + 10 > 30) {
        setCount(30)
      }
      else {
        setCount(count + 10)
      }
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const minusTen = () => {
    if (count > 0) {
      if (count - 10 < 0) {
        setCount(0)
      }
      else {
        setCount(count - 10)
      }
    }
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <span>Current Count: {count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={plusTen}>+10</button>
      <button onClick={minusTen}>-10</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter