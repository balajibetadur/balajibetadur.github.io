import React, { useState, useEffect } from 'react'
import Data from '../../Data'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import ViewCarouselRoundedIcon from '@mui/icons-material/ViewCarouselRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import './NavBar.css'

function Navbar() {

const [showNavBar, setShowNavBar] = useState(true)

 function toggleMenu(){
  setShowNavBar(!showNavBar)
 }


 const [width, setWidth]   = useState(window.innerWidth);
 const [height, setHeight] = useState(window.innerHeight);
 const updateDimensions = () => {
     setWidth(window.innerWidth);
     setHeight(window.innerHeight);
 }
 useEffect(() => {
     window.addEventListener("resize", updateDimensions);
     return () => window.removeEventListener("resize", updateDimensions);
 }, []);

 let style = {}
 if (width < 1100){
    style = {transition: 'all 0.5s', height: `${showNavBar ? '300px': '0px'}`}
 }



  return (  
    <div className='navbar'>
        <div className="navbar__container">
          <div className="navbar__name">{Data.firstName} {Data.lastName} <GridViewRoundedIcon onClick = {toggleMenu} className='navbar__options__icon icon'/></div>
          
          <div className="navbar__menu" style={style}>
          <div className={`navbar__options`} id='navbar__options' >

            <span className="navbar__option option__about"> <PersonRoundedIcon className='navbar__option__icon icon'/> About </span>
            <span className="navbar__option option__education"><SchoolRoundedIcon className='navbar__option__icon icon'/> Education</span>
            <span className="navbar__option option__skills"><HandymanRoundedIcon className='navbar__option__icon icon'/> Skills</span>
            <span className="navbar__option option__research"><PolicyRoundedIcon className='navbar__option__icon icon'/> Research</span>
            <span className="navbar__option option__experience"><WorkHistoryRoundedIcon className='navbar__option__icon icon'/> Experience</span>
            <span className="navbar__option option__projects"><ViewCarouselRoundedIcon className='navbar__option__icon icon'/> Projects</span>
            <span className="navbar__option option__certifications"><CardMembershipRoundedIcon className='navbar__option__icon icon'/> Certifications</span>
            <span className="navbar__option option__achievements"><EmojiEventsRoundedIcon className='navbar__option__icon icon'/> Achievements</span>
            <span className="navbar__option option__contact"><SendRoundedIcon className='navbar__option__icon'/> Contact</span>
            </div>
            <div className="navbar__close"><CloseRoundedIcon onClick = {toggleMenu} className='navbar__close__icon icon'/></div>
          </div>
        </div>
    </div>
  )
}

export default Navbar