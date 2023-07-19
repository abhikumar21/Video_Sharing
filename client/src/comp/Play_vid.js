import React, { useEffect, useState } from 'react'
import Thumbnail from '../images/p7.jpg'
import './Play_vid.css'
import './Card.css'
import ChannelIcon from '../images/ch_icon.png'
import { useCollapse } from 'react-collapsed'
import Comments from './Comments.js'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { fetchStart, fetchSuccess, fetchFailure } from '../redux/videoSlice'
import Upload from './Upload.js'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu } from '@headlessui/react'
//useState => change in state is reflected after refreshing
//videoSlice => change is reflected instantly


const Play_vid = () => {
  const [video, setVideo] = useState({})
  const [channel, setChannel] = useState({});
  const dispatch = useDispatch()

  const {currentUser} = useSelector((state) => state.user)
  const { currentVideo } = useSelector((state) => state.video)
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const path = useLocation().pathname.split("/")[2];
  // console.log(`/videos/find/${path}`) 
  // we use the path to fetch the data from database
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = (e) => {
    {liked ? setLiked(false) : setLiked(true)}
    {disliked ? setDisliked(false) : setDisliked(false)}

  }
  const handleDislike = (e) => {
    {disliked ? setDisliked(false) : setDisliked(true)}
    {liked ? setLiked(false) : setLiked(false)}
  }




  const handleDelete = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`/videos/${video._id}`);
      if(res.status==200) {
        console.log("deleted")
      }
      else{
        console.log("not successfull")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    const fetchData = async() => {
      dispatch(fetchStart())

      try {
        const videoRes = await axios.get(`/videos/find/${path}`)
        setVideo(videoRes.data)
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`)  
        setChannel(channelRes.data)

        dispatch(fetchSuccess(videoRes.data))

      } catch (error) {
        dispatch(fetchFailure());
      }
    }
    fetchData();
  }, [path, dispatch])

// console.log(currentVideo.videoUrl)
 if(!currentVideo) {
  return <div>Loading...</div>
 }

  return (
    <>
    
    <div className='playing_vid'>
        <div className='video'>
         <video className='video_frame' src={currentVideo?.videoUrl} controls />
        </div>

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
          <div className="ld_button">
          <button className='like_dislike' onClick={handleLike}>{liked ? <ThumbUpAltIcon/> : <ThumbUpOffAltIcon/>} {currentVideo.likes?.length}</button>
          <button className='like_dislike' onClick={handleDislike}>{disliked ? <ThumbDownAltIcon/> : <ThumbDownOffAltIcon/>} {currentVideo.dislikes?.length}</button>
          </div>

          <button className='like_dislike'><ShareIcon/> Share</button>
          <button className='like_dislike'><DownloadIcon/> Save</button>
 
      <Menu>
      <Menu.Button className="like_dislike three_dots"><MoreHorizIcon/></Menu.Button>
      <Menu.Items className="drop_down">
        <Menu.Item>
          {({ active }) => (
            <a className={`${active && 'bg-blue-500'} `}
              href="/account-settings" onClick={handleDelete} >
              Delete Post
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Edit
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
         </div>
        </div>

      </div>

      <div className='description'>
        <h5>{currentVideo.views} Views |  </h5><br/>
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
