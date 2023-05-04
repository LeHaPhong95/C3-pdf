import { useContext } from 'react'
import { ThemeContextTodoPage } from '../../../StoreTodoPageContext/ThemeContextTodoPage'

function TodoFormContext() {
  const value = useContext(ThemeContextTodoPage)
  return (
    <div className="p-5 border-2  w-8/12 m-auto mt-10">
      <form
        onSubmit={value.handleAddTodo}
        className="flex space-x-5 items-center"
      >
        <input
          onChange={(e) => value.onCheckedAll(e.target.checked)}
          type="checkbox"
          checked={value.checkedAll}
        />
        <input
          type="text"
          placeholder="New Task"
          value={value.textInput}
          onChange={value.onChangeinput}
          className="w-full border-2 rounded-md p-2"
        />
        <button className="bg-[#2259C9] w-32 p-2 rounded-md text-[#FFFFFF] whitespace-nowrap">
          Add new task
        </button>
      </form>
    </div>
  )
}

export default TodoFormContext
