import { useContext } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggler = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className=" flex fixed top-0 z-50 w-full h-12 justify-end sm:justify-start">
      <div className="w-20 flex justify-center dark:text-zinc-300 text-zinc-700">
        <button onClick={() => toggleTheme()}>
          {darkMode ? (
            <IoSunny size={24} className="dark:hover:text-yellow-400 transition-all duration-300" />
          ) : (
            <IoMoon size={24} className="hover:text-blue-700 transition-all duration-300" />
          )}
        </button>
      </div>
    </nav>
  )
}

export default ThemeToggler
