import MyRoutes from './routes'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <MyRoutes />
    </ThemeProvider>
  )
}

export default App
