import HomePage from './pages/Home/HomePage'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Navbar />
      <div className='content-container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
