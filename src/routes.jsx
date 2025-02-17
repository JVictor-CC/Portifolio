import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Portifolio from './Pages/Portifolio'

const router = createBrowserRouter([
  {
    path: '/Portifolio/',
    element: <Home />,
  },
  {
    path: '/Portifolio/cv',
    element: <Portifolio />,
  },
])

const MyRoutes = () => {
  return <RouterProvider router={router} />
}

export default MyRoutes
