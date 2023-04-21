import { useState } from 'react'

export const TodoForm = ({ onAddTodo, todos, checkAll }) => {
  const [textInput, setTextInput] = useState('')

  const handleAddTodo = (event) => {
    event.preventDefault()
    // const checkText = todos.findIndex((item) => item.text === textInput)
    const isCheckText = todos.some((item) => item.text.includes(textInput))

    if (isCheckText) {
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

  const onChangeInput = (e) => {
    return setTextInput(e.target.value)
  }

  return (
    <div className="p-5 border-2  w-8/12 m-auto ">
      <form onSubmit={handleAddTodo} className="flex space-x-5 items-center">
        <input onChange={(e) => checkAll(e.target.checked)} type="checkbox" />
        <input
          type="text"
          placeholder="New Task"
          value={textInput}
          className="w-full border-2 rounded-md p-2"
          onChange={onChangeInput}
        />
        <button
          type="submit"
          className="bg-[#2259C9] w-32 p-2 rounded-md text-[#FFFFFF] whitespace-nowrap"
        >
          Add new task
        </button>
      </form>
    </div>
  )
}
