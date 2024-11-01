import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setDarkMode(storedTheme === true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', darkMode)
    if (darkMode == true) {
      document.documentElement.classList.add('dark')
    } else if (darkMode != true) {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prevTheme) => !prevTheme)
  }

  return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}
