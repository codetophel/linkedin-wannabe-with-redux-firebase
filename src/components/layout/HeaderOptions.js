import React from 'react';
import './HeaderOptions.css';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const HeaderOptions = ({ icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div className='header-options'>
      <div className='header-options-icon'>{icon}</div>

      {avatar && (
        <Avatar className='header-options-icon' src={avatar} onClick={onClick}>
          {' '}
          {user?.email[0]}
        </Avatar>
      )}

      <h3 className='header-options-title'>{title}</h3>
    </div>
  );
};

export default HeaderOptions;
