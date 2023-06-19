
import React from 'react'
import UserCard from '../UserCard/UserCard';

export default function RightSideNavbar() {
  const handleFollow = () => {
    // Handle follow button click
  };
  return (
    <div className='space-between ml-5'>
      <div className='text-center m-10'>
         Suggested Users
      </div>
      <div className="flex-row items-center ml-10  p-3 ">
      <UserCard
        username="John Doe"
        avatarUrl="https://example.com/avatar.jpg"
      />
       <UserCard
        username="John Doe"
        avatarUrl="https://example.com/avatar.jpg"
      />
      
    </div>

    </div>
  )
}
