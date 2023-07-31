import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  const reset = () => {
    setCount(0)
  }

  const changeCount = value => {
    if (count + value <= 50 && count + value >= 0) setCount(count + value)
  }

  return (
    <div>
      <span>Current Count: {count}</span>

      {count >= 50 ?
        <button onClick={() => changeCount(1)} disabled={true}>+</button> :
        <button onClick={() => changeCount(1)}>+</button>
      }

      {count <= 0 ?
        <button onClick={() => changeCount(-1)} disabled={true}>-</button> :
        <button onClick={() => changeCount(-1)}>-</button>
      }

      {count > 40 ?
        <button onClick={() => changeCount(10)} disabled={true}>+10</button> :
        <button onClick={() => changeCount(10)}>+10</button>
      }

      {count < 10 ?
        <button onClick={() => changeCount(-10)} disabled={true}>-10</button> :
        <button onClick={() => changeCount(-10)}>-10</button>
      }

      {count === 0 ?
        <button onClick={reset} disabled={true}>Reset</button> :
        <button onClick={reset}>Reset</button>}
    </div>
  )
}

export default Counter