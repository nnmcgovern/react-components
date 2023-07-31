import { useState } from "react"

function Stopwatch() {
  const [counter, setCounter] = useState(0)
  const [currInterval, setCurrInterval] = useState(null)

  const handleStart = e => {
    if (!currInterval) {
      setCurrInterval(setInterval(() => {
        setCounter(prev => prev + 1)
      }, 1000))
    }
  }

  const handlePause = e => {
    if (currInterval) {
      clearInterval(currInterval)
      setCurrInterval(null)
    }
    else {
      setCurrInterval(setInterval(() => {
        setCounter(prev => prev + 1)
      }, 1000))
    }
  }

  const handleReset = e => {
    if (currInterval) {
      clearInterval(currInterval)
      setCurrInterval(null)
    }

    setCounter(0)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  )

}

export default Stopwatch