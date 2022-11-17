import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className='sidebar-recentItem'>
        <span className='sidebar-hash'>#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img
          src='https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt=''
        />
        <Avatar className='sidebar-avatar' />
        <h2>Akande Nicco</h2>
        <h4>nicodemusakande@gmail.com</h4>
      </div>

      <div className='sidebar-stats'>
        <div className='sidebar-stat'>
          <p>Who viewed you</p>
          <p className='sidebar-statNumber'>2121</p>
        </div>
        <div className='sidebar-stat'>
          <p>Who visited you</p>
          <p className='sidebar-statNumber'>2543</p>
        </div>
      </div>

      <div className='sidebar-bottom'>
        <h4>Recent</h4>
        {recentItem('Reactjs')}
        {recentItem('Materialize')}
        {recentItem('Material-ui')}
        {recentItem('Redux')}
        {recentItem('Firebase')}
        {recentItem('MongodB')}
        {recentItem('Firestore')}
      </div>
    </div>
  );
};

export default Sidebar;
