import HomePage from './pages/Home/HomePage'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Auth from './pages/Auth'

function App() {
  return (
    <>
      <Navbar />
      <div className='content-container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/userloginorsignup' element={<Auth />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
