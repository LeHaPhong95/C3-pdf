// import { useState } from 'react'
import { useReducer } from 'react'

// useState
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. reducer => function handle action
// 4. Dispatch => call to action

// 1. Create init state
const initState = 0

//2. Create action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// 3. Create reduce
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('invalid action')
  }
}

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState)
  return (
    <div>
      <h1>useReducer</h1>
      <h1>{count}</h1>

      <button
        onClick={() => dispatch(DOWN_ACTION)}
        className="border-2 p-1 m-2"
      >
        Down
      </button>

      <button onClick={() => dispatch(UP_ACTION)} className="border-2 p-1 m-2">
        Up
      </button>
    </div>
  )
}
