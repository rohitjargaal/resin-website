import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function Navbar() {
  const navigate = useNavigate();

  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleLogout = async () => {
    try {
      Cookies.remove("token")
      setToken(null);
      toast.success("logout successfully")
      navigate("/login");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className='navbar-container'>
        <a href="/"><img src='media/images/logo.png' style={{ height: "100%", width: "100px", objectFit: "cover" }} /></a>
        <ul style={{ display: "flex", listStyle: "none", gap: "40px", alignItems: "center", padding: "0px", margin: "0px" }}>
          <li><a href="/" className='anchortag'>Home</a></li>
          <li><a href="#" className='anchortag'>About</a></li>
          {token ? <ul style={{ display: "flex", listStyle: "none", alignItems: "center", gap: "40px", padding: "0px" }}>
            <li><a href="" style={{ textDecoration: "none", color: "black" }}>Cart</a></li>
            <li><button className='btn btn-danger' onClick={handleLogout}>Logout</button></li>
          </ul> : <li ><a href="/login" className='anchortag'><button className="btn btn-primary">Login</button></a></li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
