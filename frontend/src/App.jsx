import HomePage from './pages/User/HomePage'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateProduct from './pages/Admin/CreateProduct'
import AdminLogin from './pages/Admin/AdminLogin'

function App() {
  return (
    <>
      <Navbar />
      <div className='content-container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreateProduct />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
