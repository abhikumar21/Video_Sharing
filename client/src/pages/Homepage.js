import React, { useEffect, useState } from 'react'
import Card from '../comp/Card.js'
import './Homepage.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Homepage = ({type}) => {
   const [videos, setVideos] = useState([]);
  //  console.log(type)
  //  const {params} = useParams();
  //  console.log(params)
  //  const path = .params;
  //  console.log(path)

   useEffect(()=> {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`)
      setVideos(res.data) 
    }
    fetchVideos();
   },[type])

  return (
    <div className='cards_page'>
      {
        videos.map((video)=> (
          <Card key={video._id} video={video} />
        ) )
      }

    </div>
  )
}

export default Homepage
