import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './page/Home'
import Follow from './page/Follow'
import Merge from './page/Merge'
import TodoPage from './page/TodoPage'

import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/merge" element={<Merge />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  )
}

export default App
