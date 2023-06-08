import React from 'react'
import './Videopage.css'
import Play_vid from '../comp/Play_vid'
import Related_vid from '../comp/Related_vid'

const Videopage = () => {
  return (
    <div className='videopage'>
      <Play_vid/>
      <Related_vid/>
    </div>
  )
}

export default Videopage
