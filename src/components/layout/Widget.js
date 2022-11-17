import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widget.css';

const Widget = () => {
  const news = (heading, subheading) => {
    return (
      <div className='widget-article'>
        <div className='widget-article-left'>
          <FiberManualRecord />
        </div>
        <div className='widget-article-right'>
          <h4>{heading}</h4>
          <p>{subheading}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='Widget'>
      <div className='widget-header'>
        <h2>LinkedIn News</h2>
        <Info />
      </div>

      {news('React is Cool', 'Just freaking annoying - 2102 readers')}
      {news('MongoDB updates', 'New features - 2020 readers')}
      {news('Punch News', 'Top News - 3202 readers')}
      {news('Firebase', 'Just freaking annoying - 202 readers')}
      {news('TypeScript Up next', 'Just freaking annoying - 2023 readers')}
    </div>
  );
};

export default Widget;
