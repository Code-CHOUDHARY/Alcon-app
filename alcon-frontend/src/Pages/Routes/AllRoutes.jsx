import {  } from '@mui/icons-material'
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Topnavbar from '../../Components/Topnavbar/Topnavbar'
import LeftSideNavbar from '../../Components/LeftSideNavbar/LeftSideNavbar'
export const AllRoutes = () => {
  return (
    <div>
        <div>
            <Topnavbar/>
        </div>
        <div>
            <LeftSideNavbar/>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            </Routes>  
        </div>
    </div>
  )
}
