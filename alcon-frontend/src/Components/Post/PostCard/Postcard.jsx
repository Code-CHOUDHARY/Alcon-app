import React from 'react'
import '../PostCard/PostCard.css'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
export const Postcard = () => {
    const[showDropDown,setShowDropDown]= useState(false);
    const handleClick=()=>{
        setShowDropDown(!showDropDown);

    }
    const [isLiked, setIsLiked] = useState(false);

    const handleToggleLike = () => {
      setIsLiked(!isLiked);
    }; 

  return (
    <div className='border rounded-md w-full '>
        <div className='post-card'>
            <div className='flex justify-between items-center w-full py-4 px-5'>
                <div className='flex item-center'>
                    <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_1280.jpg" alt="" />
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>Username</p>
                        <p className='font-semibold text-sm'>Location</p>
                    </div>
                </div>
                <div>
                    <BsThreeDots className="dots" onClick={handleClick}/>
                    <div  className='dropdown-content'>
                        {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <img className='w-full' src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_640.jpg" alt="Internet On karo" />
            </div>
            <div>
                <div onClick={handleToggleLike}>
                {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
            </div>
        </div> 


    </div>
  )
}
``