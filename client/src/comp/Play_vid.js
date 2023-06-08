import React from 'react'
import Thumbnail from '../images/thumb.png'
import './Play_vid.css'
import ChannelIcon from '../images/ch_icon.png'
import { useCollapse } from 'react-collapsed'
import Comments from './Comments.js'


const Play_vid = () => {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className='playing_vid'>
      <div className='video'><img src={Thumbnail}/></div>

      <div className='v1_info'>
          <div className='v1_title'><h2>How to make 3D rotating Image Gallery | Animated rotating gallery| HTML and CSS only | Advanced CSS</h2></div>
        <div className='v1_bel'>
          <div className='v1_vid_num'>
            <div className='v1_avatar'>
              <img src={ChannelIcon}/>
            </div>
            <div className='v1_ch'>
               <h4 className='v1_chname'>WebDevExplorers</h4>
               <p>157M Subscribers</p>
            </div>
          </div>
        
         <div className='v12_buttons'>
          <button className='like_dislike'>Like</button>
          <button className='like_dislike'>Share</button>
          <button className='like_dislike'>Save</button>
          <button className='like_dislike'>...</button>
         </div>
        </div>

      </div>

      <div className='description'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima pariatur nobis magnam ipsum quam ducimus velit eius natus adipisci beatae illum sed minus provident exercitationem totam reiciendis ad explicabo cum, nulla dolor magni maxime omnis quia cumque. Atque sed ipsam libero quaerat porro consequatur debitis quam laudantium amet dolorum optio

        {isExpanded ? '' : (
          <button className='expand' {...getToggleProps()} >Show More</button>
        )}

        <div {...getCollapseProps()}>
        temporibus sapiente maiores explicabo laboriosam voluptates, fugit iure veritatis natus? Possimus perspiciatis labore molestias aperiam, animi doloribus hic libero qui dolores neque nam sint deleniti aspernatur error odit aliquid perferendis omnis vero architecto id pariatur? Vitae facere asperiores repellendus accusamus suscipit delectus voluptatibus quod dolorem eligendi assumenda ab eum reprehenderit aut odio consequatur alias nesciunt obcaecati vel distinctio dolorum, dolor voluptatum, cum modi? Enim unde modi quas totam. Dolor velit molestias perferendis cupiditate eum? Officiis culpa dolorum aperiam illum necessitatibus odit ratione iusto fuga recusandae. Magnam assumenda esse minus? Perferendis cumque sunt molestias at aspernatur itaque ea neque, modi iure!
        </div>

        { !isExpanded ? '' : (
          <button className='expand collapse' {...getToggleProps()} >Show Less</button>
        )}

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
  )
}

export default Play_vid
