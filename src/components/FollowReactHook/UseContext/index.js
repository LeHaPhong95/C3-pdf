import { useContext } from 'react'
import { ThemeContext } from '../../../StoreContexFollowHook/ThemeContext'
import Content from './Content'

// Context
// 1 create contex / tạo context
// 2 provider / cung cấp state
// 3 consumer / nhận state, dùng
//Theme : dark / light
function UseContext() {
  const toggle = useContext(ThemeContext)
  return (
    <div>
      <h1>useContext</h1>
      <button
        onClick={toggle.toggleTheme}
        className="border-2 p-2 my-10 rounded-full bg-slate-500"
      >
        Toogle theme
      </button>
      <Content />
    </div>
  )
}

export default UseContext
