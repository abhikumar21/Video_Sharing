import React from 'react'
import './Card_rel.css'
import Thumbnail from '../images/thumb.png'

const Card_rel = () => {
  return (
    <div className='rel_card'>
        <div className="rel_img">
            <img src = {Thumbnail} />
        </div>
        <div className="info"> 
          <h5>How to make Mouse Trail Using</h5>
          <p>WebDevExplorers</p>
          <p>44K views | 4 months ago</p>
        </div>
    </div>
  )
}

export default Card_rel
