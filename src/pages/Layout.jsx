import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './style/layout.css'

function Layout() {
  return (
    <div className='layout-container'>
      <nav className='nav-container'>
        <h1>HELLO</h1>
        <ul>
          <li>
            <Link to="/" className='link'>Home</Link>
          </li>
          <li>
            <Link to="/Signup" className='link'>Signup</Link>
          </li>
          <li>
            <Link to="/Login" className='link'>Login</Link>
          </li>
          <li>
            <Link to="/Product" className='link'>Product</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout

