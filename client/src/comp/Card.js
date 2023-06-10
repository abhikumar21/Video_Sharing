import React, {useState, useEffect} from 'react'
import './Card.css'
import Thumbnail from '../images/thumb.png'
import ChannelIcon from '../images/channel_icon.jpeg'
import axios from 'axios'


const Card = ({type, video}) => {
  const [channel, setChannel] = useState([]);

  useEffect(()=> {
   const fetchChannel = async () => {
     const res = await axios.get(`/users/find/${video.userId}`)
     setChannel(res.data) 
   }
   fetchChannel();
  },[video.userId])

  return (
    <div className='card'>
        <div className='image'>
          <img src={video.imgUrl} />
        </div>
        <div className='info'>
            <div className='avatar'><img src={ChannelIcon}></img></div>
            <div className='other_info'>
                <h3>{video.title}</h3>
                <h5>{channel.name}</h5>
                <p>{video.views} views | 2 days ago</p>
            </div>
        </div>
      
    </div>
  )
}

export default Card
