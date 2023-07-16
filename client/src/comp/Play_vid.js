import React, { useEffect, useState } from 'react'
import Thumbnail from '../images/thumb.png'
import './Play_vid.css'
import ChannelIcon from '../images/ch_icon.png'
import { useCollapse } from 'react-collapsed'
import Comments from './Comments.js'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { fetchStart, fetchSuccess, fetchFailure } from '../redux/videoSlice'
import Upload from './Upload.js'
//useState => change in state is reflected after refreshing
//videoSlice => change is reflected instantly


const Play_vid = () => {
  const {currentUser} = useSelector((state) => state.user)
  const { currentVideo } = useSelector((state) => state.video)
  console.log(currentVideo)
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const path = useLocation().pathname.split("/")[2];
  // console.log(`/videos/find/${path}`) 
  // we use the path to fetch the data from database

  const [video, setVideo] = useState({})
  const [channel, setChannel] = useState({});
  const dispatch = useDispatch()

  useEffect(()=> {
    const fetchData = async() => {
      dispatch(fetchStart())
     
      try {
        const videoRes = await axios.get(`/videos/find/${path}`)
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`)  
        setChannel(channelRes.data)
        setVideo(videoRes.data)
        dispatch(fetchSuccess(videoRes.data))

      } catch (error) {
        dispatch(fetchFailure());
      }
    }
    fetchData();
  }, [path, dispatch])



  return (
    <>
    <div className='playing_vid'>
      <div className='video'><img src={Thumbnail}/></div>

      <div className='v1_info'>
          <div className='v1_title'><h2>{currentVideo.title}</h2></div>
        <div className='v1_bel'>
          <div className='v1_vid_num'>
            <div className='v1_avatar'>
              <img src={ChannelIcon}/>
            </div>
            <div className='v1_ch'>
               <h4 className='v1_chname'>{currentUser.name}</h4>
               <p>{currentUser.subscribers} Subscribers</p>
            </div>
          </div>
        
         <div className='v12_buttons'>
          <button className='like_dislike'>{currentVideo.likes.length} Like</button>
          <button className='like_dislike'>Share</button>
          <button className='like_dislike'>Save</button>
          <button className='like_dislike'>...</button>
         </div>
        </div>

      </div>

      <div className='description'>
        <h5>{currentVideo.views} Views | {currentVideo.createdAt} </h5><br/>
         {currentVideo.desc}

       </div>


    <div className="comments">
      <div className="c_head">
        <h3>100 comments</h3>
        <button>Short by</button>
      </div>

     <div className="your_comment">
      <div className='v1_avatar'>
              <img src={ChannelIcon}/>
       </div>
       <input className='' placeholder='Add your Comment here'></input>
     </div>

     <div className="all_comments">
      <Comments/>
      <Comments/>
     </div>
    </div>
    </div>
    
    </>
  )
}

export default Play_vid
