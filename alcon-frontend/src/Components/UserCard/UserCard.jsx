import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const UserCard = ({ username,avatarUrl }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center',border:'1px solid gray',padding:'10px' , marginBottom:'10px' }}>
      <Avatar alt={username} src={avatarUrl} />
      <Typography variant="h6" style={{ marginLeft: '20px' }}>
        {username}
      </Typography>
      <Typography
        variant="body2"
        color="primary"
        
        style={{ marginLeft: '80px' }}
      >
        Follow
      </Typography>
    </div>
  );
};

export default UserCard;


