import React from 'react'
import { atom, useRecoilState } from 'recoil'

const countState = atom({
  key: 'counterState',
  default: 0,
})

const Counter = () => {
  const [number, setNumber] = useRecoilState(countState)

  return (
    <div className="App">
      <h1>
        Counter: <strong>{number}</strong>
      </h1>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  )
}

export default Counter
