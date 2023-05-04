import { useContext, useState } from 'react'
import { ThemeContextTodoPage } from '../../../StoreTodoPageContext/ThemeContextTodoPage'

function TodoItemContext({ todo }) {
  const [show, setShow] = useState(false)

  const value = useContext(ThemeContextTodoPage)
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
            value.completedItemCheck(todo.text, e.target.checked)
          }}
        />
        <span
          className={`ml-2 text-2xl ${todo.isComplete ? 'line-through' : ''}`}
        >
          {todo.text}
        </span>
      </div>
      {show && (
        <button
          onClick={() => value.deleteItem(todo.text)}
          className="text-2xl text-red-500"
        >
          X
        </button>
      )}
    </div>
  )
}

export default TodoItemContext
