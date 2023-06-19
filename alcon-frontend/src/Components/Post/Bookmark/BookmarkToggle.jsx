import React, { useState } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

const BookmarkToggle = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleToggleBookmark = () => {
    setIsBookmarked(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggleBookmark}>
        {isBookmarked ? <BsFillBookmarkFill /> : <BsBookmark />}
      </button>
    </div>
  );
};

export default BookmarkToggle;
