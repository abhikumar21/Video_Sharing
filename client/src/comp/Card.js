import React, {useState, useEffect} from 'react'
import './Card.css'
import Thumbnail from '../images/p7.jpg'
import ChannelIcon from '../images/channel_icon.jpeg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Select from '@material-ui/core/Select';
import { Menu } from '@headlessui/react'

const Card = ({type, video}) => {
  const [channel, setChannel] = useState([]);

  const handleDelete = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.delete("/videos/")
      console.log("deleted")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
   const fetchChannel = async () => {
     const res = await axios.get(`/users/find/${video.userId}`)
     setChannel(res.data) 
   }
   fetchChannel();
  },[video.userId])

  return (
 
    <div className='card card_text_color'>
      <Link to={`/video/${video._id}`}>
        <div className='image'>
          <img src={video.imgUrl} />
        </div>
      </Link>
        <div className='info'>
            <div className='avatar'><img src={ChannelIcon}></img></div>
            <div className='other_info'>
            <Link to={`/video/${video._id}`} className='link1 card_text_color'><h3 className='mr-5 pt-5'>{video.title}</h3></Link>
                <h5>{channel.name}</h5>
                <p>{video.views} views | 1 days ago</p>
            </div>

    <Menu>
      <Menu.Button className="three_dots"><MoreVertIcon/></Menu.Button>
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
    {/* </Link> */}
  </div>


  )
}

export default Card
