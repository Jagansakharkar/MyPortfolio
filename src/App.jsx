import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../src/Pages/Home'
import { About } from '../src/Pages/About'
import { Services } from '../src/Pages/Services'
import { Projects } from '../src/Pages/Projects'
import { Contact } from '../src/Pages/Contact'
import { PageNotFound } from '../src/Pages/PageNotFound'
import { Header } from './Components/Header'
import { SocialLinks } from './Components/SocialLinks'
function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
          <SocialLinks />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path='about' element={<About />} />

          <Route exact path='projects' element={<Projects />} />

          <Route exact path='services' element={<Services />} />

          <Route exact path='contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;