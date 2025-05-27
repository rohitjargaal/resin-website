import React, { useState } from 'react'

function Navbar() {
  const [islogin, setIsLogin] = useState(true)
  function eventchecker(e){
    e.preventDefault();
    setIsLogin(false)
  }

  return (
    <nav class="navbar">
      <div className='navbar-container'>
        <a href="/"><img src='media/images/logo.png' style={{ height: "100%", width: "100px", objectFit: "cover" }} /></a>
        <ul style={{ display: "flex", listStyle: "none", gap: "40px", alignItems: "center", padding: "0px", margin: "0px" }}>
          <li><a href="/" className='anchortag'>Home</a></li>
          <li><a href="#" className='anchortag'>About</a></li>
          <li><a href="#" className='anchortag'>Services</a></li>
          <li><a href="#" className='anchortag'>Contact</a></li>
          <li ><a href="/userloginorsignup" className='anchortag'><button className="btn btn-primary">Login</button></a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
