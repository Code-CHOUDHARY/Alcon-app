
import React from 'react'
import Topnavbar from '../../Components/Topnavbar/Topnavbar'
import LeftSideNavbar from '../../Components/LeftSideNavbar/LeftSideNavbar'
import Home from '../../Components/Home/Home'
import RightSideNavbar from '../../Components/RightSideNavbar/RightSideNavbar'

export default function Dashboard() {
  return (
    <div className="flex">

      <div className="w-2/6 h-100 fixed top-0 left-0"><LeftSideNavbar /></div>

      <div className="flex flex-col w-5/6 ml-60">

        <div className="fixed top-0 left-80"><Topnavbar /></div>


        <div className="flex flex-grow">
          <div className="flex-grow overflow-y-auto"><Home /></div>
          <div className="w-2/6  item-center"><RightSideNavbar /></div>
        </div>
      </div>
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
