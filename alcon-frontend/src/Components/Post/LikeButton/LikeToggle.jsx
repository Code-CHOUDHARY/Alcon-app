import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const LikeToggle = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggleLike}>
        {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </div>
  );
};

export default LikeToggle;
