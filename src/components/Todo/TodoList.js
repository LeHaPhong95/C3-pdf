import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, deleteItem, completedItemCheck }) => {
  return (
    <>
      {(todos || []).map((todo) => {
        return (
          <TodoItem
            key={todo.text}
            todo={todo}
            deleteItem={() => deleteItem(todo.text)}
            completedItemCheck={completedItemCheck}
          />
        )
      })}
    </>
  )
}
