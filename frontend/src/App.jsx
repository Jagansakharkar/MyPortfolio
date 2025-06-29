import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { AppLayout } from './Pages/AppLayout';
import { ThemeContextWrapper } from './context/ThemeContext';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <AppLayout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '/skills',
//         element: <Skills />,
//       },
//       {
//         path: '/projects',
//         element: <Projects />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '*',
//         element: <PageNotFound />,
//       }
//     ],
//   },
// ]);
function App() {

  return (
    <>

      <BrowserRouter>
        <ThemeContextWrapper>
          <AppLayout />
        </ThemeContextWrapper>
      </BrowserRouter>

    </>
  )
}

export default App;