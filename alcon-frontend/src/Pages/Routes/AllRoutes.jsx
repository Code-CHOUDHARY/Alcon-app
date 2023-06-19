import { } from '@mui/icons-material'
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'

export const AllRoutes = () => {
  return (
    <div>

          <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            
            </Routes>  
    </div>
  )
}
