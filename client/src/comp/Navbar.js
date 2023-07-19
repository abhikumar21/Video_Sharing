import React, { useState } from 'react'
import './Navbar.css'
import Navlogo from '../images/navlogo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ChannelIcon from '../images/ch_icon.png'
import Upload from './Upload.js';
import { logout } from '../redux/userSlice';


const Navbar = () => {
  const {currentUser} = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleLogout = async() => {
    dispatch(logout());
  }

  return (
    <>
    <div className='navbar'>
      <div className='nv1'>
       <div> <img className='navlogo' src={Navlogo}/></div>
       <input className='search' placeholder='Search' name=""/>
      </div>

      <div className='nv1'>
       <div> <Upload/></div> 
       <div className='my-button1'>
         <button className='login_pgbtn logout_btn' onClick={handleLogout}>Logout</button>
       </div>
       { currentUser ? 
       <div className='avatar'>
        <img src={ChannelIcon} />
        </div>
       : 
       <Link to="login">
       <div className='my-button1'>
         <button className='login_pgbtn'>Sign In</button>
       </div>
       </Link>
       }

      </div>
    
    </div>
</>

  )
}

export default Navbar
