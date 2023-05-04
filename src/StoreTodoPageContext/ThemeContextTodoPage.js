// 1 create context
import { createContext, useMemo, useState } from 'react'

const ThemeContextTodoPage = createContext()

// 2 create Provider
function ThemeproviderTodoPage({ children }) {
  const [todos, setTodos] = useState([])
  const [typeFilter, setTypeFilter] = useState('all')
  const [textInput, setTextInput] = useState('')

  const onChangeinput = (e) => {
    return setTextInput(e.target.value)
  }

  const onAddTodo = (payload) => {
    //payload : {
    // isComplete: true // false,
    // text: ''
    //}
    const newTodos = [...todos, payload]
    setTodos(newTodos)
  }

  const handleAddTodo = (event) => {
    event.preventDefault()

    const checkText = todos.findIndex((item) => item.text === textInput)

    // const isCheckText = todos.some((item) => item.text.includes(textInput))

    if (checkText === 0) {
      alert(textInput === '' ? 'add task' : 'had task in list')
      return
    }

    if (textInput) {
      onAddTodo({
        isComplete: false,
        text: textInput,
      })
      setTextInput('')
    }
  }

  const onFilter = (type) => {
    setTypeFilter(type)
  }

  const arrayRender = useMemo(() => {
    if (typeFilter === 'all') return todos
    else if (typeFilter === 'active') {
      return todos.filter((item) => !item.isComplete)
    } else {
      return todos.filter((item) => item.isComplete)
    }
  }, [typeFilter, todos])

  const onCheckedAll = (value) => {
    setTodos(
      todos.map((item) => {
        return {
          ...item,
          isComplete: value,
        }
      }),
    )
  }

  const checkedAll = useMemo(() => {
    if (todos.length) {
      return todos.every((todo) => todo.isComplete)
    }
    return false
  }, [todos])

  const completedItemCheck = (text, value) => {
    const newTodo = todos.map((item) => {
      if (item.text === text) {
        item.isComplete = value
      }
      return item
    })
    setTodos(newTodo)
  }

  const clearComplete = () => {
    const newTodos = todos.filter((item) => item.isComplete)
    console.log('newTodos:', newTodos)
    setTodos(todos.filter((item) => !item.isComplete))
  }

  const deleteItem = (text) => {
    const newTodos = todos.filter((item) => item.text !== text)
    setTodos(newTodos)
  }

  const totalTodoItem = todos.filter((todo) => !todo.isComplete).length
  const isClearComplete = todos.filter((item) => item.isComplete).length > 0

  const value = {
    todos,
    textInput,
    onChangeinput,
    handleAddTodo,
    totalTodoItem,
    completedItemCheck,
    onFilter,
    isClearComplete,
    clearComplete,
    deleteItem,
    arrayRender,
    onCheckedAll,
    checkedAll,
    typeFilter,
  }

  return (
    <ThemeContextTodoPage.Provider value={value}>
      {children}
    </ThemeContextTodoPage.Provider>
  )
}

export { ThemeContextTodoPage, ThemeproviderTodoPage }
