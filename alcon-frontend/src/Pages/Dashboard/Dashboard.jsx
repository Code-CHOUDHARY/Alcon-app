
import React from 'react'
import Topnavbar from '../../Components/Topnavbar/Topnavbar'
import LeftSideNavbar from '../../Components/LeftSideNavbar/LeftSideNavbar'
import Home from '../../Components/Home/Home'
import RightSideNavbar from '../../Components/RightSideNavbar/RightSideNavbar'

export default function Dashboard() {
  return (
    <div className="flex h-screen">
  <div className="w-1/4 bg-gray-200"><LeftSideNavbar/></div>
  <div className="flex flex-col w-3/4">
    <nav className="bg-blue-500 p-4"><Topnavbar/></nav>
    <div className="flex-grow bg-gray-100"><Home/>t</div>
  </div>
  <div className="w-1/6 bg-gray-200"> <RightSideNavbar/></div>
</div>
    // <div>
        
    //   <div className='flex'>
    //     <div className='w-full'>
    //     <Topnavbar/>  
        
    //     </div>
    //     <div>
        
    //     <LeftSideNavbar/>
    //     </div>
        
    //   <div className=' '>
    //       <div>
    //         <Home/>
    //       </div>
    //       {/* <div>
    //         <RightSideNavbar/>
    //       </div> */}
    //   </div>
      
    //   <div className=''>
    //   <RightSideNavbar/>
    //   </div>
    //   </div>
     
    // </div>
  );
}
