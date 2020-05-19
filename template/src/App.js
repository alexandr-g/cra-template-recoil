import React from 'react'
import { RecoilRoot } from 'recoil'

import Counter from './components/Counter'

import './App.css'

function App() {
  return (
    <RecoilRoot>
      <h1>The project is running with Recoil</h1>
      <Counter />
    </RecoilRoot>
  )
}

export default App
