import React from 'react'
import ViewPostCard from '../Post/ViewPost/ViewPostCard'
import { Postcard } from '../Post/PostCard/Postcard'
function Home() {
  return (
    <div>
      
    {/* <ViewPostCard/>
    <ViewPostCard/> */}
    <div className='space-y-10 w-full mt-10'>
      {[1,1].map((item)=>   <Postcard/>)}
  
    </div>
   
    </div>
  )
}

export default Home