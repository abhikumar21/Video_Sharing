import React, { useState } from 'react'
import './Navbar.css'
import Navlogo from '../images/navlogo.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ChannelIcon from '../images/channel_icon.jpeg'
import Upload from './Upload.js';


const Navbar = () => {
  const {currentUser} = useSelector(state => state.user)


  return (
    <>
    <div className='navbar'>
      <div> <img className='navlogo' src={Navlogo}/></div>
      <input className='search' placeholder='Search' name=""/>
      <div> <Upload/></div> 
      { currentUser ? 
      <div className='avatar'>
        <img src={ChannelIcon} />
        </div>
      : 
       <Link to="login">
       <div className='my-buttons'>
         <button>Sign In</button>
       </div>
       </Link>
      }
    
    </div>
</>

  )
}

export default Navbar
