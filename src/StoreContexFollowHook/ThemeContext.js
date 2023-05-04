import { useState, createContext } from 'react'

// 1 create contex / tạo context
const ThemeContext = createContext()

// 2 provider / cung cấp state
function ThemeProviderFollowHook({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  const value = {
    theme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProviderFollowHook }
