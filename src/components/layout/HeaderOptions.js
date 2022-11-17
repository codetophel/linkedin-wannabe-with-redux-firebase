import React from 'react';
import './HeaderOptions.css';

const HeaderOptions = ({ icon, title, avatar }) => {
  return (
    <div className='header-options'>
      <i className='header-options-icon'>{icon}</i>
      <i className='header-options-icon-avatar'>{avatar}</i>
      <h3 className='header-options-title'>{title}</h3>
    </div>
  );
};

export default HeaderOptions;
