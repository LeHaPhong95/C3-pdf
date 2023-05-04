import { useContext } from 'react'
import { ThemeContext } from '../../../StoreContexFollowHook/ThemeContext'

function Paragraph() {
  // 3 consumer / nhận state, dùng
  const StateTheme = useContext(ThemeContext)

  return (
    <div
      className={StateTheme.theme === 'light' ? 'bg-white p-1 ' : 'bg-black '}
    >
      <h3
        className={
          StateTheme.theme === 'light' ? 'text-black  ' : 'text-white  '
        }
      >
        Context provides a way to pass data through the component tree withput
        having to pass props down manually at every level
      </h3>
    </div>
  )
}

export default Paragraph
