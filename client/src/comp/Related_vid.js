import React, { useEffect, useState } from 'react'
import Card_rel from './Card_rel'
import axios from 'axios';

const Related_vid = ({type}) => {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
   const fetchVideos = async () => {
     const res = await axios.get(`/videos/${type}`)
     setVideos(res.data) 

   }
   fetchVideos();
  },[type])


  return (
    <div>
      <div className="buttons">
        Buttons
      </div>

      <div className="rel_videos">

        {videos.map((video) => (
           <Card_rel key={video._id} video={video} />
           //key is not passed
        ))
        }

       {/* <Card_rel/>
       <Card_rel/>
       <Card_rel/>
       <Card_rel/>
       <Card_rel/>
       <Card_rel/>
       <Card_rel/>
       <Card_rel/>
       <Card_rel/> */}

      </div>
    </div>
  )
}

export default Related_vid
