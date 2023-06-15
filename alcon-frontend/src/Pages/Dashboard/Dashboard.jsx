import React from 'react'
import Topnavbar from '../../Components/Topnavbar/Topnavbar'
import LeftSideNavbar from '../../Components/LeftSideNavbar/LeftSideNavbar'
import Home from '../../Components/Home/Home'
import RightSideNavbar from '../../Components/RightSideNavbar/RightSideNavbar'
import ViewPostCard from '../../Components/Post/ViewPostCard'
export default function Dashboard() {
  return (
    <div>
      <Topnavbar/>
      <LeftSideNavbar/>
      <Home/>
      <ViewPostCard/>
      <RightSideNavbar/>
    </div>
  )
}
