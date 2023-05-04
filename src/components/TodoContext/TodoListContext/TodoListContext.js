import { useContext } from 'react'
import { ThemeContextTodoPage } from '../../../StoreTodoPageContext/ThemeContextTodoPage'

import TodoItemContext from '../TodoItemContext/TodoItemContext'

export const TodoListContext = () => {
  const value = useContext(ThemeContextTodoPage)
  return (
    <>
      {value.arrayRender.map((todo) => {
        return <TodoItemContext key={todo.text} todo={todo} />
      })}
    </>
  )
}
