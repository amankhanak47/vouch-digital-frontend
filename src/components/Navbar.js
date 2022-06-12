import React from 'react'
import logo from "./image2.png"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
          <img src={logo} alt="" />
          <div className="btns">
              <button className='free-trial'>Start free Trial</button>
              <button className='navbar-login'>Login</button>
          </div>
    </div>
  )
}

export default Navbar
