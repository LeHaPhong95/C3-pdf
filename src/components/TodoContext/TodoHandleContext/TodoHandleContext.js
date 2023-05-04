import { useContext } from 'react'
import { ThemeContextTodoPage } from '../../../StoreTodoPageContext/ThemeContextTodoPage'

export const TodoHandleContext = () => {
  const value = useContext(ThemeContextTodoPage)
  return (
    <div className="flex border-x-2 border-b-2 p-5 w-8/12 m-auto shadow-5xl">
      <div className="w-1/3">
        <span>{value.totalTodoItem}left</span>
      </div>

      <div className="w-1/3 flex justify-between">
        <button
          className={value.typeFilter === 'all' ? 'text-red-500' : ''}
          onClick={() => value.onFilter('all')}
        >
          All
        </button>
        <button
          className={value.typeFilter === 'active' ? 'text-red-500' : ''}
          onClick={() => value.onFilter('active')}
        >
          Active
        </button>
        <button
          className={value.typeFilter === 'completed' ? 'text-red-500' : ''}
          onClick={() => value.onFilter('completed')}
        >
          Completed
        </button>
      </div>
      {value.isClearComplete && (
        <div className="w-1/3 text-right">
          <button onClick={value.clearComplete}>Clear completed</button>
        </div>
      )}
    </div>
  )
}
