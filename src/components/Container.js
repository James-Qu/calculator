import React from 'react';
import Display from './Display';
import Button from './Button';
import './Container.css';

const buttonPannel = (props) => {
  return (
    <div className="container">
      <Display></Display>
      <Button extraStyle='silver'>AC</Button>
      <Button extraStyle='silver'>+/-</Button>
      <Button extraStyle='silver'>%</Button>
      <Button extraStyle='orange'>/</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button extraStyle='orange'>X</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button extraStyle='orange'>-</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button extraStyle='orange'>+</Button>
      <Button>0</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button extraStyle='orange'>=</Button>
    </div>
  );
};

export default buttonPannel;
