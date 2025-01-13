import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../src/Pages/Home'
import { About } from '../src/Pages/About'
import { Skills } from '../src/Pages/Skills'
import { Projects } from '../src/Pages/Projects'
import { Contact } from '../src/Pages/Contact'
import { PageNotFound } from '../src/Pages/PageNotFound'
import { AppLayout } from './Components/Layout/AppLayout'


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      }
    ],
  },
]);
function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;