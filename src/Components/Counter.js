import React, { useState } from 'react'

export default function Counter() {

    const [ count, setCount ] = useState(0)

    const minusHandler = () => {
        if (count > 0) { setCount(prevCount => prevCount -1) } }

    const plusHandler = () => {
        setCount(prevCount => prevCount + 1)
    }

    const resetValue = () => {
        setCount(0);
    }

  return (
    <div>
        <button onClick={minusHandler}>-</button>
        <span>{count}</span>
        <button onClick={plusHandler}>+</button>
        <hr />
        <button onClick={resetValue}>RESET</button>
    </div>
  )
}
