import React from 'react'
import './Styles/Header.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import InfoIcon from '@mui/icons-material/Info';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import { useNavigate } from 'react-router-dom';
function Header() {
  let Nav = useNavigate();
  return (
    <div>
      <div className="PcHeaderView">
        <h2>Jeremy</h2>
        <h4>htetahyan@gmail.com</h4>
      </div>
      <div className="MBHeaderView">
         <div className="header_icons">
          <HomeRoundedIcon className='header_icon'
          onClick={() => Nav('/home')}/>
          <WorkspacesRoundedIcon className='header_icon'
           onClick={() => Nav('/projects')}/>
          <InfoIcon className='header_icon'
            onClick={() => Nav('/about')}/>
          <TravelExploreRoundedIcon
           className='header_icon'   onClick={() => Nav('/explore')}/>
          <EmailRoundedIcon className='header_icon'
            onClick={() => Nav('/contact')}/>
         </div>
      </div>
    </div>
  )
}

export default Header
