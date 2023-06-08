import React from 'react'
import ChannelIcon from '../images/ch_icon.png'

const Comments = () => {
  return (
    <>
      <div className='v1_avatar'>
              <img src={ChannelIcon}/>
       </div>
       <div className="comment1">
        <h4 className="user">WebDevExplorers</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab iure dolores officia assumenda animi iste quam perferendis aspernatur doloribus?</p>
       </div>
    </>
  )
}

export default Comments
