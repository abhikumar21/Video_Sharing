import React, { useEffect, useState } from 'react'
import './Menu.css'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';

const Menu = () => {

  const [theme, setTheme] = useState("light-theme");
  const darkmode =() =>{
   if(theme == "light-theme") {
    setTheme("dark-theme");
   }
   else{
    setTheme("light-theme");
   }
  }

  useEffect ( () => {
    document.body.className = theme;
  }, [theme]);

  

  return (
    <div className='menu'>
      <a href="#"><HomeIcon/> Menu</a>
      <a href="#"><ExploreIcon/> Explore</a>
      <a href="#"><SubscriptionsIcon/> Subscriptions</a>
      <hr/>
      <a href="#"><VideoLibraryIcon/> Library</a>
      <a href="#"><HistoryIcon/> History</a>
      <hr/>
      <div className='sugg'>Sign in to like videos, comment and Subscribe</div>
      <hr/>
      <a href="#"><LibraryMusicIcon/> Music</a>
      <a href="#"><SportsVolleyballIcon/> Sports</a>
      <a href="#"><SportsEsportsIcon/> Gaming</a>
      <a href="#"><SlideshowIcon/> Movies</a>
      <a href="#"><NewspaperIcon/> News</a>
      <a href="#"><LiveTvIcon/> Live</a>
      <hr/>
      <a href="#"><SettingsIcon/> Settings</a>
      <a href="#"><ReportIcon/> Report</a>
      <a href="#"><HelpIcon/> Help</a>
      <a href='#' onClick={()=> darkmode()}><HomeIcon/> Light Mode</a>




    </div>
  )
}

export default Menu
