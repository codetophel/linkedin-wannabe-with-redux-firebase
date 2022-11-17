import React from 'react';
import './InputOptions.css';

const InputOptions = ({ icon, color, title }) => {
  return (
    <div className='input-options'>
      <i style={{ color: color }}>{icon}</i>
      <h4>{title}</h4>
    </div>
  );
};

export default InputOptions;
