import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Details } from './pages/Details/Details'
import { Home } from './pages/Home/Home'

function App (): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
