import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './page/Home'
import Follow from './page/Follow'
import Merge from './page/Merge'
import TodoPage from './page/TodoPage'
import ReactHook from './page/ReactHook'
import TodoPageContext from './page/TodoPageContext'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/merge" element={<Merge />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/react-hook" element={<ReactHook />} />
        <Route path="/todo-page-context" element={<TodoPageContext />} />
      </Routes>
    </>
  )
}

export default App
