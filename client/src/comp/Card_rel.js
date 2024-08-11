import React, { useEffect, useState } from 'react'
import './Card_rel.css'
import Thumbnail from '../images/p7.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Card_rel = ({video}) => {
  // console.log(video.userId)
  const [channel, setChannel] = useState(null);
  const truncatedTitle = video.title.slice(0, 70);
  // console.log(truncatedTitle)

  useEffect(() => {

    const fetchChannel = async() => {
      const res = await axios.get(`/users/find/${video.userId}`)
      setChannel(res.data)
      
    }
    fetchChannel()
  }, [video.userId])


  
  if (!channel) {
    // Render loading state or placeholder content while fetching channel data
    return <div></div>;
  }
  // console.log(channel, "channel")

  return (
    
    <div className='rel_card'>
        <div className="rel_img">
            <img src = {video.imgUrl} />
        </div>
        <div className="info"> 
        <Link to={`/video/${video._id}`} className='link1 card_text_color'>
          <h5 className='rel_t1'>
          {video.title.length > 70 ? truncatedTitle + "..." : video.title}
         </h5>
         </Link>
          <p>{channel?.name}</p>
          <p>{video.views} views | 4 months ago</p>
        </div>
    </div>
  )
}

export default Card_rel
