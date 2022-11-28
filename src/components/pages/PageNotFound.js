import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className='PageNotFound'>
      <h2>Page Not Found</h2>
      <div>
        <Link to='/'>
          <button className='btn btn-sm btn-light my-1'>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
