import React from 'react'
import './Navbar.css'
import Navlogo from '../images/navlogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div> <img className='navlogo' src={Navlogo}/></div>
      <input className='search' placeholder='Search' name=""/>
      <div className='my-buttons'>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
