import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Urls } from './Utilities/Urls'
import { Header } from './Components/Header'

function App() {

  return (
    <>
    <BrowserRouter>
      <header className='header'>
        <Header />
      </header>
      <main>
        <Urls />
      </main>
      <footer>

      </footer>
      </BrowserRouter>
    </>
  )
}

export default App
