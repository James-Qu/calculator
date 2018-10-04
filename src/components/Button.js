import React from 'react';
import './Button.css';

const button = (props) => {
  return (
    <button className={'btn ' + props.extraStyle}>{props.children}</button>
  );
};

export default button;
