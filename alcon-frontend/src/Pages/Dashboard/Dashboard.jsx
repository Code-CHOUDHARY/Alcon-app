
import React from 'react'
import Topnavbar from '../../Components/Topnavbar/Topnavbar'
import LeftSideNavbar from '../../Components/LeftSideNavbar/LeftSideNavbar'
import Home from '../../Components/Home/Home'
import RightSideNavbar from '../../Components/RightSideNavbar/RightSideNavbar'

export default function Dashboard() {
  return (
    <div>
      <div className='flex'>
        <div className='w-40'>
          <LeftSideNavbar/>
          
        </div>
        <div className='ml-40 w-60'>
        <Topnavbar/>
         
        </div>
        
      <div className='grid grid-cols-2 gap-4;'>
          <div>
            <Home/>
          </div>
          <div>
            <RightSideNavbar/>
          </div>
      </div>
      
      {/* <div className=''>
      <RightSideNavbar/>
      </div> */}
      </div>
     
    </div>
  );
}
