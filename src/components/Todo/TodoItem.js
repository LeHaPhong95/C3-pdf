import { useState } from 'react'

export const TodoItem = ({ todo, deleteItem, completedItemCheck }) => {
  const [show, setShow] = useState(false)
  return (
    <div
      className="w-8/12 border-x-2 border-b-2 m-auto p-5 flex justify-between  "
      onMouseEnter={() => {
        setShow(true)
      }}
      onMouseLeave={() => {
        setShow(false)
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={(e) => {
            completedItemCheck(todo.text, e.target.checked)
          }}
        />
        <span
          className={`ml-2 text-2xl ${todo.isComplete ? 'line-through' : ''}`}
        >
          {todo.text}
        </span>
      </div>
      {show && (
        <button onClick={deleteItem} className="text-2xl text-red-500">
          X
        </button>
      )}
    </div>
  )
}
