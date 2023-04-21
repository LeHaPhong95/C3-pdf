import { useMemo, useState } from 'react'
import { TodoForm } from '../../components/Todo/TodoForm'
import { TodoList } from '../../components/Todo/TodoList'
import { TodoHandle } from '../../components/Todo/TodoHandle'

function TodoPage() {
  const [todos, setTodos] = useState([])
  const [typeFilter, setTypeFilter] = useState('all')
  const [active, setActive] = useState('all')

  const onAddTodo = (payload) => {
    // payload : {
    //   isComplete: true || false,
    //   text: ''
    // }
    const newTodos = [...todos, payload]
    setTodos(newTodos)
  }

  const checkAll = (value) => {
    console.log('value', value)
    setTodos(
      todos.map((item) => {
        return {
          ...item,
          isComplete: value,
        }
      }),
    )
  }

  const arrayRender = useMemo(() => {
    if (typeFilter === 'all') return todos
    else if (typeFilter === 'active') {
      return todos.filter((item) => !item.isComplete)
    } else {
      return todos.filter((item) => item.isComplete)
    }
  }, [typeFilter, todos])
  console.log('arrayRender:', arrayRender)

  const clearComplete = () => {
    const newTodo = todos.filter((item) => !item.isComplete)
    setTodos(newTodo)
  }

  const deleteItem = (text) => {
    const newTodos = todos.filter((item) => item.text !== text)
    setTodos(newTodos)
  }
  const completedItemCheck = (text, value) => {
    const newTodo = todos.map((item) => {
      if (item.text === text) {
        item.isComplete = value
      }
      return item
    })
    setTodos(newTodo)
  }

  const onFilter = (type) => {
    setTypeFilter(type)
    setActive(type)
  }

  const totalTodo = todos.filter((todo) => !todo.isComplete)
  const isClearComplete = todos.filter((item) => item.isComplete)
  return (
    <div className="mt-10 mb-96">
      <h1 className="opacity-60 text-red-600 text-7xl text-center ">Todo</h1>
      <TodoForm onAddTodo={onAddTodo} todos={todos} checkAll={checkAll} />
      {arrayRender.length > 0 && (
        <>
          <TodoList
            todos={arrayRender}
            deleteItem={deleteItem}
            completedItemCheck={completedItemCheck}
          />
          {/* <TodoHandle
            totalTodo={totalTodo.length}
            onFilter={onFilter}
            clearComplete={clearComplete}
          /> */}
        </>
      )}
      {todos.length > 0 && (
        <TodoHandle
          active={active}
          totalTodo={totalTodo.length}
          onFilter={onFilter}
          clearComplete={clearComplete}
          isClearComplete={isClearComplete.length > 0}
        />
      )}
    </div>
  )
}

export default TodoPage
