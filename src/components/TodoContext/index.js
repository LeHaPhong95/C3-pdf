import { useContext } from 'react'
import { ThemeContextTodoPage } from '../../StoreTodoPageContext/ThemeContextTodoPage'

import TodoFormContext from './TodoFormContext/TodoForm'
import { TodoHandleContext } from './TodoHandleContext/TodoHandleContext'
import { TodoListContext } from './TodoListContext/TodoListContext'

function TodoContext() {
  const value = useContext(ThemeContextTodoPage)

  return (
    <div>
      <TodoFormContext />
      {value.arrayRender.length > 0 && (
        <>
          <TodoListContext />
        </>
      )}
      {value.todos.length > 0 && <TodoHandleContext />}
    </div>
  )
}

export default TodoContext
