import React, { useEffect, useState } from 'react'
import './Videopage.css'
import Play_vid from '../comp/Play_vid'
import Related_vid from '../comp/Related_vid'
import { useDispatch } from 'react-redux'
import { fetchStart, fetchSuccess, fetchFailure } from '../redux/videoSlice'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Videopage = ({type}) => {

  return (
    <div className='videopage'>
      <Play_vid/>
      <Related_vid type={type}/>
    </div>
  )
}

export default Videopage
