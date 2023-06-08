import React from 'react'
import './Card.css'
import Thumbnail from '../images/thumb.png'
import ChannelIcon from '../images/channel_icon.jpeg'


const Card = () => {
  return (
    <div className='card'>
        <div className='image'>
          <img src={Thumbnail} />
        </div>
        <div className='info'>
            <div className='avatar'><img src={ChannelIcon}></img></div>
            <div className='other_info'>
                <h3>Introducing apple vision pro</h3>
                <h5>WebDevExplorers</h5>
                <p>4833 views | 2 days ago</p>
            </div>
        </div>
      
    </div>
  )
}

export default Card
