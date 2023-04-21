export const TodoHandle = ({
  totalTodo,
  isClearComplete,
  onFilter,
  clearComplete,
  active,
}) => {
  const itemText = totalTodo > 1 ? 'items' : 'item'

  return (
    <div className="flex border-x-2 border-b-2 p-5 w-8/12 m-auto shadow-5xl">
      <div className="w-1/3">
        <span>
          {totalTodo} {itemText} left
        </span>
      </div>
      <div className="w-1/3 flex justify-between">
        <button
          className={active === 'all' ? 'text-red-500' : ''}
          onClick={() => onFilter('all')}
        >
          All
        </button>
        <button
          className={active === 'active' ? 'text-red-500' : ''}
          onClick={() => onFilter('active')}
        >
          Active
        </button>
        <button
          className={active === 'completed' ? 'text-red-500' : ''}
          onClick={() => onFilter('completed')}
        >
          Completed
        </button>
      </div>
      {isClearComplete && (
        <div className="w-1/3 text-right">
          <button onClick={clearComplete}>Clear completed</button>
        </div>
      )}
    </div>
  )
}
