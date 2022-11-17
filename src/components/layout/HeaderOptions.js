import React from 'react';
import './HeaderOptions.css';
import { Avatar } from '@mui/material';

const HeaderOptions = ({ icon, title, avatar, onClick }) => {
  return (
    <div className='header-options'>
      <div className='header-options-icon'>{icon}</div>
      {avatar && (
        <Avatar
          className='header-options-icon'
          src={avatar}
          onClick={onClick}
        />
      )}
      <h3 className='header-options-title'>{title}</h3>
    </div>
  );
};

export default HeaderOptions;
