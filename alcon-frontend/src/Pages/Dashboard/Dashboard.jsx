
import React from 'react'
import Topnavbar from '../../Components/Topnavbar/Topnavbar'
import LeftSideNavbar from '../../Components/LeftSideNavbar/LeftSideNavbar'
import Home from '../../Components/Home/Home'
import RightSideNavbar from '../../Components/RightSideNavbar/RightSideNavbar'

export default function Dashboard() {
  return (
    <div>
        <Topnavbar/>
      <div className='flex'>
        <div>
        </div>
        <div>
        <LeftSideNavbar/>
        </div>
        
      <Home/>
      
      <RightSideNavbar/>
      </div>
     
    </div>
  );
}
